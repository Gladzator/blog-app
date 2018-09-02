import database from '../firebase/firebase';

// All uid
export const allUid = (uid) => ({
  type: 'ALL_UID',
  uid
})

export const getAllUid = () => {
  return (dispatch) => {
    return database.ref(`users`).once('value').then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        childSnapshot.forEach((childSnapshot2) => {
          childSnapshot2.forEach((childSnapshot3) => {
            childSnapshot3.forEach((childSnapshot4) => {
              if(childSnapshot2.key==="details"){
                dispatch(allUid({
                  id:childSnapshot.key,
                  ...childSnapshot3.val()
                }));
              }
            });
          });
        });
      });
    });
  }
}

// Edit allUid
export const editallUid = (uid,updates) => ({
  type: 'EDIT_ALL_UID',
  uid,
  updates
})

export const editAllUid = (name) => {
  return (dispatch, getState) => {
    const currentUser = getState().auth.uid;
    console.log(currentUser)
    return database.ref(`users`).update(name).then(() => {
        dispatch(editallUid(currentUser,name));
      }
    );
  }
}
