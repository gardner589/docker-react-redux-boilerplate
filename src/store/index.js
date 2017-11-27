import configureStore from './configureStore';
import rootReducer  from '../redux';
import rootSaga from '../sagas/';

const createStore = () => configureStore(rootReducer, rootSaga);

export default createStore;
