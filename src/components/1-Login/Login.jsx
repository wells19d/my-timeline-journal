import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import '../App/App.css';

/* This is the landing page, the first page the users will see when going to the site. It shares a secondary view with the registration page */

function Login() {
  const history = useHistory();

  return (
    <center>
      <br />
      <br />
      <Grid container spacing={3} className="rightTable">
        <Grid item xs={12} className="about">
          <Router>
            <div>
              <LoginForm />
              <center>
                <Button
                  type="button"
                  className="btn btn_asLink"
                  onClick={() => {
                    history.push('/registration');
                  }}
                >
                  Create Account
                </Button>
                {/* <br />
            <br />
            <Button
              type="button"
              className="btn btn_asLink"
              onClick={() => {
                history.push('/recovery');
              }}
            >
              Forgot Username / Password ?
            </Button> */}
              </center>
            </div>
          </Router>
        </Grid>
      </Grid>
      <br />
    </center>
  );
}

export default Login;
