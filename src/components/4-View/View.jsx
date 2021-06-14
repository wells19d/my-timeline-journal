import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import './View.css';

function View() {
  const dispatch = useDispatch();
  const store = useReduxStore(); // Grabbing the store information from the journal table to display
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_ENTRY' });
  }, [dispatch]);

  const deleteButton = (journalID) => {
    //  console.log(`Is this a delete handler`, journalID);  // was used to check if it was grabbing the correct ID to delete from
    dispatch({
      type: 'DELETE_ENTRY',
      payload: journalID,
    });
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
      <h2>View Entries</h2>
      <section>
        {store.journal.map((journalEntry, index) => {
          return (
            <Table className='cardDisplay' key={journalEntry.id}>
              <TableBody>
                <TableRow className='cardHeader'>
                  <TableCell className='headerLeft'>
                    Date: {moment.utc(journalEntry.date).format('MMM Do YYYY')}
                  </TableCell>
                  <TableCell align='right' className='headerRight'>
                    <Button
                      className='btn btn_asSubmit'
                      onClick={(event) => {
                        updateButton(journalEntry);
                      }}
                    >
                      Update
                    </Button>
                    {`\u00A0\u00A0\u00A0\u00A0`}
                    <Button
                      className='btn btn_asCancel'
                      onClick={(event) => {
                        deleteButton(journalEntry.id);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow className='cardBody'>
                  <TableCell
                    style={{ verticalAlign: 'top' }}
                    className='bodyLeft'
                  >
                    <img className='imageReducer' src={journalEntry.photo} />
                  </TableCell>
                  <TableCell
                    style={{ verticalAlign: 'top' }}
                    className='bodyRight'
                  >
                    {journalEntry.entry}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          );
        })}
      </section>
    </center>
  );
}

export default View;