const journalReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_JOURNAL':
        console.log('The payload is,', action.payload);
        return action.payload;
      case 'DELETE_ENTRY':
        return [];
      default:
        return state;
    }
  };
  export default journalReducer;