import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import postReducer from '../reducers/post';
import detailReducer from '../reducers/detail';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      post: postReducer,
      detail: detailReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
