const postDefaultState = [];

export default (state = postDefaultState, action) => {

    console.log(action.details);
  switch (action.type) {
    case 'ADD_DETAILS':
      return [
        ...state,
        action.details
      ];
    case 'SET_DETAILS': return action.details;
    case 'EDIT_POST' :
      return state.map((detail) => {
        if(detail.id === action.id) {
          return {
            ...detail,
            ...action.updates
          }
        } else {
          return detail;
        }
      })
    default:
      return state;
  }
}
