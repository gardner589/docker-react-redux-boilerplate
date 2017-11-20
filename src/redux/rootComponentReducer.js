/*** This is an index of all reducers from each module */

import { combineReducers } from 'redux';


/*** Component Reducers */

import { reducer as notificationComponent } from '../components/notification/redux';


/*** Combine all reducers into rootReducer */

const rootComponentReducer = combineReducers({
  notificationComponent,
});

export default rootComponentReducer;
