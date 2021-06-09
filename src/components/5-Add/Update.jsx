import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

function Update(props) {

    const journalEntry = useSelector(store => store.journalDetailsReducer);
    console.log(`what's in here?`, journalEntry);

    const [date, setDate] = useState(journalEntry.date);
    const [photo, setPhoto] = useState(journalEntry.photo);
    const [entry, setEntry] = useState(journalEntry.entry);

    // const journal = useSelector((store) => store.journal);
    // console.log(`what's in here?`, journal); 
    // const oldDate = useSelector((store) => store.journalReducer);
    // const oldPhoto = useSelector((store) => store.journalReducer);
    // const oldEntry = useSelector((store) => store.journalReducer);

    // console.log('Old Date Here?', oldDate);
    // console.log('Old Photo Here?', oldPhoto)
    // console.log('Old Entry here?', oldEntry);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: 'GET_ENTRY',
    });
  }, []);

  const updateEntry = (event) => {
    event.preventDefault();
    console.log(`Added Journal Entry`, { date, photo, entry });

    dispatch({
      type: 'UPDATE_ENTRY',
      payload: {
        id: journalEntry.id,
        date: date,
        photo: photo,
        entry: entry,
      },
    });
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
