import React from 'react';
import Button from '@material-ui/core/Button';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Main() {
  const history = useHistory();
  const user = useSelector((store) => store.user);

  return (
    <Router>
      <center>
        <>
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
            <Button
              type='button'
              className='btn btn_asLink'
              onClick={() => {
                history.push('/view');
              }}
            >
              View Page
            </Button>
          </p>
        </>
      </center>
    </Router>
  );
}

export default Main;
