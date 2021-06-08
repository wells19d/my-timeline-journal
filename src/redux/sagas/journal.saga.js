import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

  function* getAllEntries() {
    // get all journal entries from the DB
    try {
      const response = yield axios.get('/api/journal');
  
      yield put({ type: 'SET_JOURNAL', payload: response.data });
    } catch (error) {
      console.log('Journal get request failed', error);
    }
  }


function* journalSaga() {
    yield takeEvery('GET_ENTRY', getAllEntries);
  }

  export default journalSaga;