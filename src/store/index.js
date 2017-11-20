import configureStore from './configureStore';
import rootReducer  from '../redux';
import rootSaga from '../sagas/';

const createStore = () => {
  return configureStore(rootReducer, rootSaga);
};

export default createStore;
