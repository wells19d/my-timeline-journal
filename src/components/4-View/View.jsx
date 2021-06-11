import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

function View() {
  const dispatch = useDispatch();
  const store = useReduxStore(); // Grabbing the store information from the journal table to display
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_ENTRY' });
  }, [dispatch]);

  const deleteButton = (journalID) => {
    //  console.log(`Is this a delete handler`, journalID);  // was used to check if it was grabbing the correct ID to delete from
    dispatch({
      type: 'DELETE_ENTRY',
      payload: journalID,
    });
  };

  const updateButton = (journalEntry) => {
    //  console.log(`Is this a update handler`, journalEntry);  // was used to check if it is grabbing the correct ID to update
    dispatch({
      type: 'SET_ENTRY_DETAILS',
      payload: journalEntry,
    });
    history.push('/update');
  };

  return (
    <center>
      <div>
        <table>
          <thead>
            <tr>
              <th>Date:</th>
              <th>Photo:</th>
              <th>Entry:</th>
              <th>Update:</th>
              <th>Delete:</th>
            </tr>
          </thead>
          <tbody>
            {store.journal.map((journalEntry, index) => (
              <tr key={journalEntry.id}>
                <td>{moment(journalEntry.date).format('MMM Do YYYY')}</td>
                <td>
                  <img src={journalEntry.photo} />
                </td>
                <td>{journalEntry.entry}</td>
                <td>
                  <button
                    onClick={(event) => {
                      updateButton(journalEntry);
                    }}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={(event) => {
                      deleteButton(journalEntry.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </center>
  );
}

export default View;
