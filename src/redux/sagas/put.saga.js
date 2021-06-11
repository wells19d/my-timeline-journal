import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* updateEntry(action) {
  // console.log('update entry', action); // was used to check the action of the entry being updated
  
  try {
    let id = action.payload.id;
    // console.log(`Getting the payload`, action.payload); // was used for checking what was being grabbed by the action.payload
    yield axios.put(`/api/journal/${id}/`, action.payload);
    // console.log(`What is the id? ${id}`); // was used to check what id was being grabbed when entry was being updated
    yield put({ type: 'FETCH_ENTRY' });
  } catch (error) {
    console.log('Error in adding new item', error); // used for checking errors
  }
}

function* putSaga() {
  yield takeEvery('UPDATE_ENTRY', updateEntry);
}

export default putSaga;