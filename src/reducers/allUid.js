const postDefaultState = [];

export default (state = postDefaultState, action) => {
  switch (action.type) {
    case 'ALL_UID':
      return [
        ...state,
        action.uid
      ];
    case 'EDIT_ALL_UID' :
      return state.map((allUid) => {
        if(allUid.id === action.uid) {
          return {
            ...allUid,
            ...action.updates
          }
        } else {
          return allUid;
        }
      })
    default:
      return state;
  }
}
