/* This is an index of all reducers from each module */

import {combineReducers} from 'redux';


/* App Reducers */

import {reducer as alerts} from '../modules/alerts/redux';


/* Combine all reducers into rootReducer */

const rootReducer = combineReducers({
  alerts,
});

export default rootReducer;
