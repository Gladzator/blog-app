const postDefaultState = [];

export default (state = postDefaultState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        action.posts
      ];
    case 'SET_POST': return action.posts;
    case 'REMOVE_POST':
      return state.filter(({ id }) =>  id !== action.id  );
    case 'EDIT_POST' :
      return state.map((post) => {
        if(post.id === action.id) {
          return {
            ...post,
            ...action.updates
          }
        } else {
          return post;
        }
      })
    default:
      return state;
  }
}
