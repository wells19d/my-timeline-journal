import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getAllEntries(action) {
  //console.log('Getting Entry', action); // was used for checking the action when getting all entries

  try {
    const response = yield axios.get('/api/journal');
    yield put({ type: 'SET_ENTRY', payload: response.data });
  } catch (error) {
    console.log('Journal get request failed', error);
  }
}

function* journalSaga() {
  yield takeEvery('FETCH_ENTRY', getAllEntries);
}

export default journalSaga;