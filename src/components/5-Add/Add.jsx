import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function Add() {
  const [date, setDate] = useState('');
  const [photo, setPhoto] = useState('');
  const [entry, setEntry] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const CHARACTER_LIMIT = 1000;

  useEffect(() => {
    dispatch({
      type: 'FETCH_ENTRY',
    });
  }, []);

  const addEntry = (event) => {
    Swal.fire({
      icon: 'success',
      title: 'Your post was successful!',
      showConfirmButton: false,
      timer: 1500,
    });
    event.preventDefault();
    // console.log(`Added Journal Entry`, { date, photo, entry }); // checking to see what was added to the entry
    history.push('./main');

    dispatch({
      type: 'ADD_ENTRY',
      payload: {
        date: date,
        photo: photo,
        entry: entry,
      },
    });
  };

  return (
    <Router>
      <center>
        <br />
        <br />
        <Grid container spacing={3} className="rightTable">
          <Grid item xs={12}>
            <br />
            <br /> {/* All the extra br's are just using to help with spacing for temp usage */}
            <br />
            <form>
              <TextField
                variant="outlined"
                label="Journal Event Date"
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {`\u00A0\u00A0\u00A0\u00A0\u00A0`} {/* These are just spaces used to help with spacing for temp usage */}
              <TextField
                variant="outlined"
                label="Photo URL"
                type="text"
                value={photo}
                onChange={(event) => setPhoto(event.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <br />
              <br />
              <TextField
                variant="outlined"
                label="Add Entry"
                type="textarea"
                style={{ width: '500px' }}
                value={entry}
                multiline
                rows={4}
                inputProps={{
                  maxLength: CHARACTER_LIMIT,
                }}
                helperText={`${entry.length}/${CHARACTER_LIMIT}`}
                onChange={(event) => setEntry(event.target.value)}
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <br />
              <br />
              <Button
                type="button"
                className="btn btn_asCancel"
                onClick={() => {
                  history.push('/main'); // Sends user back to the main page
                }}
              >
                Cancel
              </Button>
              {`\u00A0\u00A0\u00A0\u00A0`} {/* These are just spaces used to help with spacing for temp usage */}
              <Button
                type="submit"
                className="btn btn_asSubmit"
                onClick={(event) => addEntry(event)} // Sends user back to the main page
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </center>
      <br />
    </Router>
  );
}

export default Add;
