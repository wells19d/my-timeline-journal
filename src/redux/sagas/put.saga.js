import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* updateEntry(action) {
  console.log('update entry', action);

  try {
    // let id = action.payload;
    console.log(`Getting the payload`, action.payload);
    yield axios.put(`/api/journal/${id}/`, action.payload);
    yield put({ type: 'GET_ENTRY' });
  } catch (error) {
    console.log('Error in adding new item', error);
  }
}

function* putSaga() {
  yield takeEvery(' PUT_ENTRY', updateEntry);
}

export default putSaga;