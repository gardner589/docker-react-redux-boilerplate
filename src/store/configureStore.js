import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

// create the store
export default (rootAppReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootAppReducer, compose(...enhancers));

  sagaMiddleware.run(rootSaga);

  return store;
};
