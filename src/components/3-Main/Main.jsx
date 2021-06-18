import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
                      className="dateButton"
                      key={journalEntry.id}
                      component="button"
                      onClick={() => history.push(`/view/${journalEntry.id}`)}
                    >
                      {moment.utc(journalEntry.date).format('MMM Do, YYYY')}
                    </Link>
                  );
                })}
              </Typography>
            </TableCell>
            <TableCell className="tableCellRight">
              <Grid container spacing={3} className="rightTable">
              <Grid item xs={12} />
              <Grid item xs={12} />
              <Grid item xs={12} />
                <Grid item xs={12} className="introTitle">Welcome {user.username}</Grid>
                <Grid item xs={12} className="introView">What would you like to do today?<br />To Review, Click a date <br /><br />or</Grid>
                <Grid item xs={12} className="introView"><Button
                  type="button"
                  className="btn btn_asLink"
                  onClick={() => {
                    history.push('/add');
                  }}
                >
                  Add New Entry
                </Button></Grid>
                <Grid item xs={12} />
                <Grid item xs={12} />
                <Grid item xs={12} />
              </Grid>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </center>
  );
}

export default Main;

