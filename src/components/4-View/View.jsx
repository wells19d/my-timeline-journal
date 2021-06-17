import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useReduxStore from '../../hooks/useReduxStore';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import './View.css';

function View() {
  const dispatch = useDispatch();
  const store = useReduxStore(); // Grabbing the store information from the journal table to display
  const history = useHistory();

  // ----

  const entries = useSelector((store) => store.journal); // entire journal list in redux
  // console.log('whats in there', entries);

  let params = useParams(); // grabbbing params from the react router
  // console.log(params);

  let id = params.id;

  let entry = entries.find((entry) => entry.id === Number(id)); // hunting for the journal id given
  // console.log(`Found entry`, entry);

  if (!entry) {
    // bailout if movie isn't found
    return <h2> Entry Not Found</h2>;
  }

  // useEffect(() => {
  //   dispatch({ type: 'FETCH_ENTRY' });
  // }, [dispatch]);

  const deleteButton = (journalID) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      // Added Sweet alert to fire when user wants to delete an item, prompting with a popup to confirm
    }).then((result) => {
      if (result.isConfirmed) {
        // if selected yes, fires the dispatch function
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        history.push('../main');
        dispatch({
          type: 'DELETE_ENTRY',
          payload: journalID,
        });
      }
      // if the user selects no, bails out of the function here.
    });
    //  console.log(`Is this a delete handler`, journalID);  // was used to check if it was grabbing the correct ID to delete from
  };

  const updateButton = (journalEntry) => {
    //  console.log(`Is this a update handler`, journalEntry);  // was used to check if it is grabbing the correct ID to update
    dispatch({
      type: 'SET_ENTRY_DETAILS',
      payload: journalEntry,
    });
    history.push('/update');
  };

  return (
    <center>
      <Table className="displayTable">
        <TableBody className="tableBody">
          <TableRow>
            <TableCell className="tableCellLeft">
              <Typography className="leftTable">
                {store.journal.map((journalEntry, index) => {
                  return (
                    <Link
                      key={journalEntry.id}
                      component="button"
                      variant="body2"
                      onClick={() => history.push(`/view/${journalEntry.id}`)}
                    >
                      {moment.utc(journalEntry.date).format('MMM Do YYYY')}
                    </Link>
                  );
                })}
              </Typography>
            </TableCell>
            <TableCell className="tableCellRight">
              <Grid container spacing={3} className="viewRightTable">
                <Grid item xs={4} className="viewButtonRow" />
                <Grid item xs={4} className="viewButtonRow" />
                <Grid item xs={4} className="viewButtonRow">
                  <Button
                    className="btn btn_asSubmit"
                    onClick={(event) => {
                      updateButton(entry);
                    }}
                  >
                    Update
                  </Button>
                  {`\u00A0\u00A0\u00A0\u00A0`}
                  <Button
                    className="btn btn_asCancel"
                    onClick={(event) => {
                      deleteButton(entry.id);
                    }}
                  >
                    Delete
                  </Button>
                </Grid>
                <Grid item xs={3} className="viewContentRow">
                  <img className="imageReducer" src={entry.photo} />
                </Grid>
                <Grid item xs={9} className="viewContentRow">
                  {entry.entry}
                </Grid>
              </Grid>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </center>
  );
}

export default View;
