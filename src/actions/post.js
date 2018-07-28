import database from '../firebase/firebase';

export const addPost = (post) => ({
  type: "ADD_POST",
  posts: post
})

export const startAddPost = (postData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      title = '',
      content = '',
      likes = 0
    } = postData;
    const post = { title, content , likes};

    return database.ref(`users/${uid}/posts`).push(post).then((ref) => {
      dispatch(addPost({
        id: ref.key,
        ...post
      }));
    });
  };
};

export const setPost = (posts) => ({
  type: "SET_POST",
  posts
});

export const startSetPost = () => {
  return (dispatch) => {
    return database.ref(`users`).once('value').then((snapshot) => {
      const posts = [];
      snapshot.forEach((childSnapshot) => {
        childSnapshot.forEach((childSnapshot2) => {
          childSnapshot2.forEach((childSnapshot3) => {
            posts.push({
              uid: childSnapshot.key,
              id: childSnapshot3.key,
              ...childSnapshot3.val()
          });
        });
      });
      });
      dispatch(setPost(posts));
    });
  };
};

export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates
});

export const startEditPost = ( id, updates ) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/posts/${id}`).update(updates).then(() => {
      dispatch(editPost( id, updates ));
    });
  };
}
