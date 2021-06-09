// import axios from 'axios';
// import { put, takeEvery } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SHELF" actions
function* deleteEntry(action) {
  console.log('in delete entry', action);

  //     try {
  //       let id = action.payload
  //       // debugger;
  //       yield axios.delete(`/api/shelf/${id}/`);
  //       yield put({ type: 'GET_ENTRY' });
  //     } catch (error) {
  //       console.log('Error in adding new item', error);
  //     }
}

function* deleteSaga() {
  yield takeEvery('DELETE_ITEM', deleteEntry);
}

export default deleteSaga;
