import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* AddNewEntry(action) {
  console.log('Add Entry', action);

  try {
    yield axios.post('/api/journal', action.payload); // new journal entries
    yield put({ type: 'FETCH_ENTRY' });
  } catch (error) {
    console.log('Error Adding Entry', error);
  }
}

function* addSaga() {
  yield takeEvery('ADD_ENTRY', AddNewEntry); // Post movies to the movie list
}

export default addSaga;