import React from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../App/App.css';

function ContactUs() {
  return (
      <center>
        <p>
          This is a feature coming soon, for now please <br />
          <a href='mailto:wells19d@gmail.com?subject=MTJ Assistance'>
            Send an Email
          </a>
          !
        </p>
      </center>
  );
}

export default ContactUs;
