import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import React from 'react';
import useReduxStore from '../../hooks/useReduxStore';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import '../App/App.css';

function Main() {
  const dispatch = useDispatch();
  const store = useReduxStore();
  const user = useSelector((store) => store.user);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_ENTRY' });
  }, [dispatch]);

  return (
    <center>
      <br />
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
              <Typography className="rightTable">
                <br />
                Welcome {user.username}
                <br />
                <br />
                <br />
                Please Select a Date to View
                <br />
                or
                <br />
                <br />
                <Button
                  type="button"
                  className="btn btn_asLink"
                  onClick={() => {
                    history.push('/add');
                  }}
                >
                  Add New Entry
                </Button>
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </center>
  );
}

export default Main;
