import database from '../firebase/firebase';

// ADD_POST
export const addPost = (post) => ({
  type: "ADD_POST",
  posts: post
})

export const startAddPost = (postData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      uiid = '',
      title = '',
      content = '',
      likes = 0
    } = postData;
    let post = { uid, title, content , likes};

    return database.ref(`users/${uid}/posts`).push(post).then((ref) => {
      dispatch(addPost({
        id: ref.key,
        ...post
      }));
    });
  };
};

// SET_POST
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
            if(childSnapshot2.key === 'posts') {
              posts.push({
                uid: childSnapshot.key,
                id: childSnapshot3.key,
                ...childSnapshot3.val()
            });
            }
        });
      });
      });
      dispatch(setPost(posts));
    });
  };
};


// REMOVE_POST
export const removePost = ( { id } = {} ) => ({
  type: 'REMOVE_POST',
  id
});

export const startRemovePost = ({ id } = {} ) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/posts/${id}`).remove().then(() => {
      dispatch(removePost({ id }));
    });
  };
}

// EDIT_POST
export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates
});

export const startEditPost = ( uid,id, likes, updates ) => {
  return (dispatch, getState) => {
    updates.likes = likes;
    if(uid != undefined){
      return database.ref(`users/${uid}/posts/${id}`).update(updates).then(() => {
        dispatch(editPost( id, updates ));
      });
    }
  };
}
