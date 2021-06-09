import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { sizing } from '@material-ui/system';

function Add() {
  const [date, setDate] = useState('');
  const [photo, setPhoto] = useState('');
  const [entry, setEntry] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Adding Movie`, { date, photo, entry });
    history.push('./view');

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
        <form onSubmit={handleSubmit}>
          <TextField
            variant='outlined'
            label='Journal Event Date'
            type='date'
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          {`\u00A0\u00A0\u00A0\u00A0\u00A0`}
          <TextField
            variant='outlined'
            label='Photo URL'
            type='text'
            value={photo}
            onChange={(event) => setPhoto(event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <br />
          <br />
          <TextField
            variant='outlined'
            label='Add Entry'
            type='textarea'
            style={{ width: '500px' }}
            value={entry}
            multiline
            rows={4}
            onChange={(event) => setEntry(event.target.value)}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <br />

          <Button
            type='button'
            className='btn btn_asCancel'
            onClick={() => {
              history.push('/main'); // Sends user back to the main page
            }}
          >
            Cancel
          </Button>
          <Button type='submit' className='btn btn_asSubmit'>
            Submit
          </Button>
        </form>
      </center>
    </Router>
  );
}

export default Add;
