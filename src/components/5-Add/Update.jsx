import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import Swal from 'sweetalert2';

function Update(props) {
  const journalEntry = useSelector((store) => store.journalDetailsReducer);
  // console.log(`what's in here?`, journalEntry); // was used for checking to see what was coming out of journalEntry, to varify what was brought over

  const [date, setDate] = useState(moment(journalEntry.date).format('yyyy-MM-DD'));
  const [photo, setPhoto] = useState(journalEntry.photo);
  const [entry, setEntry] = useState(journalEntry.entry);
  // console.log(moment(journalEntry.date).format('yyyy-MM-DD')); // was used to check how to bring in the date format needed to pass date back into the date form

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: 'FETCH_ENTRY',
    });
  }, []);

  const updateEntry = (event) => {
    Swal.fire({
      icon: 'success',
      title: 'Your post was updated!',
      showConfirmButton: false,
      timer: 1500
    })
    event.preventDefault();
    // console.log(`Added Journal Entry`, { date, photo, entry }); // was used to checked what was being added into the journal entry

    dispatch({
      type: 'UPDATE_ENTRY',
      payload: {
        id: journalEntry.id,
        date: date,
        photo: photo,
        entry: entry,
      },
    });
    // console.log(`Added Journal Entry`, { date, photo, entry }); // was used to check what was being added into the journal entry also
    history.push('./view');
  };

  return (
    <Router>
      <center>
        <form>
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
          {`\u00A0\u00A0\u00A0\u00A0`}
          <Button
            type='submit'
            className='btn btn_asSubmit'
            onClick={(event) => updateEntry(event)} // Sends user back to the main page
          >
            Submit
          </Button>
        </form>
      </center>
    </Router>
  );
}

export default Update;
