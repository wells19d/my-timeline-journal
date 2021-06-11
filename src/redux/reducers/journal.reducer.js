const journalReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ENTRY':
      // console.log('The payload is,', action.payload); // used to check what the payload was bringing over.
      return action.payload;
    case 'DELETE_ENTRY':
      return [];
    default:
      return state;
  }
};
export default journalReducer;
