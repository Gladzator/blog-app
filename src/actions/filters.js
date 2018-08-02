export const setTextFilter = ( text = '' ) => ({
  type: 'SET_TEXT_FILTER',
  text
});
export const searchByTitle = () => ({
  type: 'SEARCH_BY_TITLE',
});
export const searchByContent = () => ({
  type: 'SEARCH_BY_CONTENT',
});
export const sortByLike = () => ({
  type: 'SORT_BY_LIKE',
});
