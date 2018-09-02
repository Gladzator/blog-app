import database from '../firebase/firebase';

export const addLike = (like) => ({
  type: "ADD_LIKE",
  likes: like
})

export const startAddLike = (id, likeData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      likeid = '',
      likes = 0
    } = likeData;
    const like = { likeid, likes };

    return database.ref(`users/${uid}/liked/${id}`).set({
        likes
    }).then(() => {
      dispatch(addLike({
        id,
        likes
      }));
    });
  };
};

export const setLikeKeys = (likekey) => ({
  type: "SET_LIKE_KEY",
  likekey
});

export const startSetLikeKey = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/liked`).once('value').then((snapshot) => {

      const likeKeys = [];
      snapshot.forEach(childSnapshot => {
          likeKeys.push({
            id:childSnapshot.key,
            ...childSnapshot.val()
          })
    })
      dispatch(setLikeKeys(likeKeys));
    });
  };
};


// REMOVE_LIKE5
export const removeLike = ( { id } = {} ) => ({
  type: 'REMOVE_LIKE',
  id
});

export const startRemoveLike = ( uid, id = '') => {
  return (dispatch, getState) => {
    console.log(uid,id);
    return database.ref(`users/${uid}/liked/${id}`).remove().then(() => {
      dispatch(removeLike({ id }));
    });
  };
}

export const editLikesKey = (like, updates) => ({
  type: 'EDIT_LIKES_KEY',
  like,
  updates
});

export const startEditLikesKey = ( like, updates ) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/liked/${like}`).update(updates).then(() => {
      dispatch(editLikesKey( like, updates ));
    });
  };
}
