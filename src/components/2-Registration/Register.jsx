import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Register() {
  const history = useHistory();

  return (
    <Router>
      <div>
        <RegisterForm />
        <center>
          <Button
            type='button'
            className='btn btn_asLink'
            onClick={() => {
              history.push('/login');
            }}
          >
            Back to Login
          </Button>
        </center>
      </div>
    </Router>
  );
}

export default Register;
