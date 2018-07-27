export default (posts) => {
  return posts.filter((post) => {
    const title = post.title;
    const content = post.content;
    const likes = post.likes;

    return title && content;
  })
};
