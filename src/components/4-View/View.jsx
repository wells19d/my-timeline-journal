import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

function View() {
  const dispatch = useDispatch();
  const store = useReduxStore();

  useEffect(() => {
    dispatch({ type: 'GET_ENTRY' });
  }, [dispatch]);

  return (
    <center>
      <div>
        <table>
          <thead>
            <tr>
              <th>Date:</th>
              <th>Photo:</th>
              <th>Entry:</th>
            </tr>
          </thead>
          <tbody>
            {store.journal.map((journal, index) => (
              <tr key={index}>
                <td>{journal.date}</td>
                <td>
                  <img src={journal.photo} />
                </td>
                <td>{journal.entry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </center>
  );
}

export default View;
