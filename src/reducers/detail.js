const postDefaultState = [];

export default (state = postDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DETAILS':
      return [
        ...state,
        action.details
      ];
    case 'SET_DETAILS': return action.details;
    default:
      return state;
  }
}
