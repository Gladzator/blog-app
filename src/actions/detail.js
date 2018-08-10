import  database from '../firebase/firebase';
import  {storage} from '../firebase/firebase';

export const addDetail = (detail) => ({
  type: "ADD_DETAILS",
  details: detail
})

export const startAddDetail = (detailData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = '',
      // picture = '',
    } = detailData;
    const detail = { name }; //picture

      return database.ref(`users/${uid}/details`).push(detail).then((ref) => {
        dispatch(addDetail({
          id: ref.key,
          name: detail.name
        }));
      });

  };
};

// export const startAddFile = (fileData = {}) => {
//   return (dispatch, getState) => {
//     const uid = getState().auth.uid;
//     const {
//       picture = '',
//     } = fileData;
//     const file = { picture };
//
//      storage.child(`profile/${uid}`).put(file.picture);
//
//   };
// };

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
