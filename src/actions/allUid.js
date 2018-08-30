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
        uid.push(childSnapshot.key);
      });
      console.log(uid);
      dispatch(allUid(uid));
    });
  }
}
