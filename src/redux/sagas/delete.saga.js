import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* deleteEntry(action) {
  console.log('in delete entry', action);

  try {
    let id = action.payload;
    yield axios.delete(`/api/journal/${id}/`);
    yield put({ type: 'GET_ENTRY' });
  } catch (error) {
    console.log('Error deleting', error);
  }
}

function* deleteSaga() {
  yield takeEvery('DELETE_ENTRY', deleteEntry);
}

export default deleteSaga;
