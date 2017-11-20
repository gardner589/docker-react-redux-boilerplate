import configureComponentStore from './configureComponentStore';
import configureAppStore from './configureAppStore';
import { rootAppReducer, rootComponentReducer } from '../redux';
import rootSaga from '../sagas/';

export const createComponentStore = () => {
  return configureComponentStore(rootComponentReducer);
};

export const createAppStore = () => {
  return configureAppStore(rootAppReducer, rootSaga);
};

export default createAppStore;
