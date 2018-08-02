
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'Title',
  likes: 0
};
export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SEARCH_BY_TITLE':
      return {
        ...state,
        sortBy: 'Title'
      };
      case 'SEARCH_BY_CONTENT':
        return {
          ...state,
          sortBy: 'Content'
        };
        case 'SORT_BY_LIKE':
          return {
            ...state,
            sortBy: 'Likes'
          };
    default:
      return state;
  }
};
