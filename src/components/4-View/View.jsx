import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useHistory } from 'react-router-dom';

function View() {
  const dispatch = useDispatch();
  const store = useReduxStore();
  const history = useHistory();
  

  useEffect(() => {
    dispatch({ type: 'FETCH_ENTRY' });
  }, [dispatch]);

  const deleteButton = (journalID) => {
    console.log(`Is this a delete handler`, journalID); // used to check if it was grabbing the correct ID to delete from
    dispatch({
      type: 'DELETE_ENTRY',
      payload: journalID,
    });
  };

  const updateButton = (journalEntry) => {
    console.log(`Is this a update handler`, journalEntry); // used to check if it is grabbing the correct ID to update
    dispatch({
      type: 'GET_ENTRY',
      payload: journalEntry,
    })
    history.push('/update');
  }



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
                <td>{journalEntry.date}</td>
                <td>
                  <img src={journalEntry.photo} />
                </td>
                <td>{journalEntry.entry}</td>

                <td>
                  <button 
                  onClick={(event) => {
                    updateButton(journalEntry);
                    console.log(`Update Button Was Clicked`)
                    }}>Update</button>
                </td>
                <td>
                  <button
                    onClick={(event) => {
                      deleteButton(journalEntry.id);
                      {
                        console.log(`Entry ${journalEntry.id} was deleted`);
                      }
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
