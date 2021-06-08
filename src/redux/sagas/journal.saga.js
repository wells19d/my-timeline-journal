import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

  function* getAllEntries() {
    // get all journal entries from the DB
    try {
      const journal = yield axios.get('/api/journal');
      console.log('Get all journal entries:', journal.data);
      yield put({ type: 'SET_JOURNAL', payload: journal.data });
    } catch {
      console.log('get all error');
    }
  }

function* journalSaga() {
    yield takeEvery('GET_ENTRY', getAllEntries);
  }

  export default journalSaga;