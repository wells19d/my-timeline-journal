import React from 'react';
import Button from '@material-ui/core/Button';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Main() {
    return (
        <Router>
            <center>
        <>This is the Main User Page
        <p>
        <Button>
          <Link to='/view'>View Page</Link>
        </Button></p>
        </>
        </center>
        </Router>
    )
}

export default Main;