import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import Link from '@material-ui/core/Link';
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
      <Table className="displayTable">
        <tbody className="tableBody">
          <tr>
            <td className="tableCellLeft">
              <Card className="leftCard">
                <ul>
                  {store.journal.map((journalEntry, index) => {
                    return (
                      <li key={journalEntry.id}>
                        <Link
                          component="button"
                          variant="body2"
                          onClick={() => history.push(`/view/${journalEntry.id}`)}
                        >
                          {moment.utc(journalEntry.date).format('MMM Do YYYY')}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            </td>
            <td className="tableCellRight">
              <Card className="viewCard">
                <center>
                  Welcome {user.username}
                  <p>
                    <Button
                      type="button"
                      className="btn btn_asLink"
                      onClick={() => {
                        history.push('/add');
                      }}
                    >Add Entry
                    </Button>
                    {`\u00A0\u00A0\u00A0\u00A0`}
                    <Button
                      type="button"
                      className="btn btn_asLink"
                      onClick={() => {
                        history.push('/view');
                      }}
                    >View Page
                    </Button>
                  </p>
                </center>
              </Card>
            </td>
          </tr>
        </tbody>
      </Table>
    </center>
  );
}

export default Main;