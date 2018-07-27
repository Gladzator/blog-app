const postDefaultState = [];

export default (state = postDefaultState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        action.posts
      ];
    case 'SET_POST': return action.posts;
    default:
      return state;
  }
}
