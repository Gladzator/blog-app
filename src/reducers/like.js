const postDefaultState = [];

export default (state = postDefaultState, action) => {
  switch (action.type) {
    case 'ADD_LIKE':
      return [
        ...state,
        action.likes
      ];
      case 'EDIT_LIKE' :
        return state.map((like) => {
          if(like.id === action.id) {
            return {
              ...like,
              ...action.updates
            }
          } else {
            return like;
          }
        })
        case 'EDIT_LIKES_KEY' :
          return state.map((like) => {
            if(like.id === action.like) {
              return {
                ...like,
                ...action.updates
              }
            } else {
              return like;
            }
          })

      case 'SET_LIKE_KEY': return action.likekey;
    default:
      return state;
  }
}
