import { createStore } from 'redux';

// create the store
export default (rootComponentReducer) => {
  return createStore(rootComponentReducer);
};
