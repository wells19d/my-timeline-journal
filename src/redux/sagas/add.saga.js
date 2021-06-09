import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* AddNewEntry(action) {
  console.log('Add Entry', action);

  try {
    yield axios.post('/api/journal', { journal: action.payload }); // new journal entries
    console.log('Added Entry');
    yield put({ type: 'GET_ENTRY' });
  } catch (err) {
    console.log('Error Adding Entry', err);
  }
}

function* addSaga() {
  yield takeEvery('ADD_ENTRY', AddNewEntry); // Post movies to the movie list
}

export default addSaga;
