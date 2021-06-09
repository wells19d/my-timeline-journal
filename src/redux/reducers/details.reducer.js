const journalDetailsReducer = (state = {}, action) => {
    if (action.type === 'SET_JOURNAL_DETAILS') {
        return action.payload;
    }
    return state;
}

export default journalDetailsReducer;