import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import '../App/App.css';

// Works as a switch view for the landing page

function Register() {
  const history = useHistory();

  return (
    <center>
      <br />
      <br />
      <Router>
        <Grid container spacing={3} className="rightTable">
          <Grid item xs={12} className="about">
            <RegisterForm />
            <center>
              <Button
                type="button"
                className="btn btn_asLink"
                onClick={() => {
                  history.push('/login');
                }}
              >
                Back to Login
              </Button>
            </center>
          </Grid>
        </Grid>
      </Router>
      <br />
    </center>
  );
}

export default Register;
