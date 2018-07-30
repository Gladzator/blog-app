import database from '../firebase/firebase';

export const addDetail = (detail) => ({
  type: "ADD_DETAILS",
  details: detail
})

export const startAddDetail = (detailData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = ''
    } = detailData;
    const detail = { name };
    return database.ref(`users/${uid}/details`).push(detail).then((ref) => {
      dispatch(addDetail({
        id: ref.key,
        name: detail.name
      }));
    });
  };
};

export const setDetails = (details) => ({
  type: "SET_DETAILS",
  details
});

export const startSetDetails = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/details`).once('value').then((snapshot) => {

      const details = [];
      snapshot.forEach(childSnapshot => {
        childSnapshot.forEach(childSnapshot2 => {
          if(childSnapshot2.key==='name') {
            details.push({
              id: childSnapshot2.key,
              name:childSnapshot2.val()
            })
          }
        });

    })
      dispatch(setDetails(details));
    });
  };
};
