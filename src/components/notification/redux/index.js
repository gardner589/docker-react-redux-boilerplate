import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';


/*** Types and Action creators */

const { Types, Creators } = createActions({
  showNotification: ['bool'],
}, {
  prefix: 'NOTIFICATION/'
});

export const NotificationComponentTypes = Types;
export const NotificationComponentActions = Creators;


/*** Initial State */

export const INITIAL_STATE = Immutable({
  isVisible: false,
});


/*** Reducers */

export const show = (state, { bool }) => state.merge({ isVisible: bool });


/*** Connect Reducers and Types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHOW_NOTIFICATION]: show,
});
