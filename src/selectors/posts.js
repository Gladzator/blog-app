export default (posts, {text, sortBy}) => {
  return posts.filter((post) => {
    if(sortBy === 'Title') {
      const titleMatch = post.title.toLowerCase().includes(text.toLowerCase());
      return titleMatch ;
    } else if (sortBy === 'Content') {
      const contentMatch = post.content.toLowerCase().includes(text.toLowerCase());
      return contentMatch;
    } else {
      return true;
    }
  }).sort((a, b) => {
      if (sortBy === 'Likes') {
        return a.likes < b.likes ? 1 : -1;
      }
  });
};
