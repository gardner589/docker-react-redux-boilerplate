import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';


/*** Types and Action creators */

const { Types, Creators } = createActions({
  getAlertsRequest: ['data'],
  getAlertsSuccess: ['payload'],
  getAlertsFailure: null,
  selectAlert: ['id'],
  deselectAlert: ['id'],
  selectAllAlerts: null,
  deselectAllAlerts: null,
}, {
  prefix: 'ALERTS/'
});

export const AlertsTypes = Types;
export const AlertsActions = Creators;


/*** Initial State */

export const INITIAL_STATE = Immutable({
  fetching: null,
  payload: [],
  error: null,
});


/*** Reducers */

export const request = (state, action) => state.merge({ ...INITIAL_STATE, fetching: true });
export const success = (state, { payload }) => state.merge({ ...INITIAL_STATE, fetching: false, payload });
export const failure = (state) => state.merge({ ...INITIAL_STATE, fetching: false, error: true });
export const selectAll = (state) => {
  return state.merge({
    payload: state.payload.map((d) => {
      return d.merge({ isSelected: true });
    })
  });
};
export const deselectAll = (state) => {
  return state.merge({
    payload: state.payload.map((d) => {
      return d.merge({ isSelected: false });
    })
  });
};
export const select = (state, { id }) => {
  return state.merge({
    payload: state.payload.map((d) => {
      if (d.id === id) {
        return d.merge({ isSelected: true });
      }
      return d;
    })
  });
};
export const deselect = (state, { id }) => {
  return state.merge({
    payload: state.payload.map((d) => {
      if (d.id === id) {
        return d.merge({ isSelected: false });
      }
      return d;
    })
  });
};


/*** Connect Reducers and Types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ALERTS_REQUEST]: request,
  [Types.GET_ALERTS_SUCCESS]: success,
  [Types.GET_ALERTS_FAILURE]: failure,
  [Types.SELECT_ALERT]: select,
  [Types.DESELECT_ALERT]: deselect,
  [Types.SELECT_ALL_ALERTS]: selectAll,
  [Types.DESELECT_ALL_ALERTS]: deselectAll,
});
