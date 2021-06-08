import React from 'react';
import Button from '@material-ui/core/Button';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Main() {
    const history = useHistory();

    return (
        <Router>
            <center>
        <>This is the Main User Page
        <p>
        <Button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/view');
          }}
        >
        View Page
      </Button></p>
        </>
        </center>
        </Router>
    )
}

export default Main;