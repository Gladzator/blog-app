import database from '../firebase/firebase';

// All uid
export const allUid = (uid) => ({
  type: 'ALL_UID',
  uid
})

export const getAllUid = () => {
  return (dispatch) => {
    return database.ref(`users`).once('value').then((snapshot) => {
      const uid = [];
      snapshot.forEach((childSnapshot) => {
        childSnapshot.forEach((childSnapshot2) => {
          childSnapshot2.forEach((childSnapshot3) => {
            childSnapshot3.forEach((childSnapshot4) => {
              if(childSnapshot2.key==="details"){
                uid.push({
                  id:childSnapshot.key,
                  ...childSnapshot3.val()
                });
              }
            });
          });
        });
      });
      dispatch(allUid(uid));
    });
  }
}
