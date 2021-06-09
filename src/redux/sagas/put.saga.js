function* updateEntry(action) {
    console.log('update entry', action);
  
    //     try {
    //       let id = action.payload
    //       // debugger;
    //       yield axios.delete(`/api/shelf/${id}/`);
    //       yield put({ type: 'GET_ENTRY' });
    //     } catch (error) {
    //       console.log('Error in adding new item', error);
    //     }
  }
  
  function* putSaga() {
    // yield takeEvery(' UPDATE_ENTRY', updateEntry);
  }
  
  export default putSaga;