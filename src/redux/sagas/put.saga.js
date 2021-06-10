import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* updateEntry(action) {
  console.log('update entry', action);
  
  try {
    let id = action.payload.id;
    console.log(`Getting the payload`, action.payload.id);
    yield axios.put(`/api/journal/${id}/`, action.payload);
    console.log(`What is the id? ${id}`);
    yield put({ type: 'UPDATE_ENTRY' });
  } catch (error) {
    console.log('Error in adding new item', error);
  }
}

function* putSaga() {
  yield takeEvery(' SET_JOURNAL_DETAILS ', updateEntry);
}

export default putSaga;