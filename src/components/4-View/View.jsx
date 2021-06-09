import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

function View() {
  const dispatch = useDispatch();
  const store = useReduxStore();

  useEffect(() => {
    dispatch({ type: 'GET_ENTRY' });
  }, [dispatch]);

  const deleteButton = (journalID) => {
    console.log(`Is this a delete handler`, journalID); // used to check if it was grabbing the correct ID to delete from
    dispatch({
      type: 'DELETE_ENTRY',
      payload: journalID,
    });
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
                <td>{journalEntry.date}</td>
                <td>
                  <img src={journalEntry.photo} />
                </td>
                <td>{journalEntry.entry}</td>

                <td>
                  {/* <button onClick={(event) => {console.log(`Update Button Was Clicked`)}}>Update</button> */}
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
