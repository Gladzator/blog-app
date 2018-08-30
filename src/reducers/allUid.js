const postDefaultState = [];

export default (state = postDefaultState, action) => {
  switch (action.type) {
    case 'ALL_UID':
      return [
        ...state,
        action.uid
      ];
    default:
      return state;
  }
}
