import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addPost,
  startAddPost
} from '../../actions/post';
import posts from '../fixtures/post';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore =  configureMockStore([thunk]);


beforeEach((done) => {
  const postData = {};
  posts.forEach(({ id, title, content }) => {
    postData[id] = { title, content }
  });
  database.ref(`users/${uid}/posts`).set(postData).then(() => done());
});

test('should setup add post object with provided values', () => {
  const action = addPost(posts[2]);
  expect(action).toEqual({
    type: 'ADD_POST',
    posts: posts[2]
  });
});

test('should add post to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const postData = {
      title: 'Wow',
      content: 'Amazing'
  }
  store.dispatch(startAddPost(postData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_POST',
      posts: {
        id: expect.any(String),
        ...postData
      }
    });

    return database.ref(`users/${uid}/posts/${actions[0].posts.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(postData);
    done();
  });
});
