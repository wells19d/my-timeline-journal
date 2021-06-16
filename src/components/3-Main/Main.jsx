import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import '../App/App.css';

function Main() {
  const dispatch = useDispatch();
  const entries = useSelector((store) => store.entry);
  const user = useSelector((store) => store.user);
  const history = useHistory();

  // useEffect(() => {
  //   dispatch({ type: 'FETCH_ENTRY' });
  // }, [dispatch]);

  return (

        <center>
          <table className="displayTable">
            <tbody className="tableBody">
              <tr>
                <td className="tableCellLeft">
                  <Card className="leftCard">
                  <ul>
                  {/* <li> Content Here </li> */}
                </ul>
                </Card>
                </td>
                <td className="tableCellRight">
                  <Card className="viewCard">
                    <center>Welcome {user.username}</center>
                  </Card>
                  </td>
              </tr>
              <tr>
              <td>{`\u00A0\u00A0\u00A0\u00A0`}</td>
              <td>{`\u00A0\u00A0\u00A0\u00A0`}</td>
              </tr>
            </tbody>
          </table>
        </center>
  );
}

export default Main;

/* 
          Welcome {user.username}
          <p>
            <Button
              type='button'
              className='btn btn_asLink'
              onClick={() => {
                history.push('/add');
              }}
            >
              Add Entry
            </Button>
            {`\u00A0\u00A0\u00A0\u00A0`}
            <Button
              type='button'
              className='btn btn_asLink'
              onClick={() => {
                history.push('/view');
              }}
            >
              View Page
            </Button>
*/
