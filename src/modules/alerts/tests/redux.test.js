import {actions, types, reducer, INITIAL_STATE} from '../redux';

describe('Alerts redux', () => {
  test('Test get alerts request action', () => {
    expect(actions.getAlertsRequest({test: true})).toEqual({type: types.GET_ALERTS_REQUEST, data: {test: true}});
    expect(reducer(INITIAL_STATE, {
      type: types.GET_ALERTS_REQUEST,
      data: {}
    })).toEqual({
      fetching: true,
      error: false,
      payload: [],
    });
  });


  test('Test get alerts success action', () => {
    expect(actions.getAlertsSuccess({test: true})).toEqual({type: types.GET_ALERTS_SUCCESS, payload: {test: true}});
    expect(reducer(INITIAL_STATE, {
      type: types.GET_ALERTS_SUCCESS,
      payload: [{id: 1}, {id: 2}]
    })).toEqual({
      fetching: false,
      error: false,
      payload: [{id: 1}, {id: 2}],
    });
  });


  test('Test get alerts failure action', () => {
    expect(actions.getAlertsFailure({test: true})).toEqual({type: types.GET_ALERTS_FAILURE});
    expect(reducer(INITIAL_STATE, {
      type: types.GET_ALERTS_FAILURE,
    })).toEqual({
      fetching: false,
      error: true,
      payload: [],
    });
  });


  test('Test select single alert', () => {
    expect(reducer(INITIAL_STATE, {
      type: types.GET_ALERTS_SUCCESS,
      payload: [{id: 1}, {id: 2}]
    })).toEqual({
      fetching: false,
      error: false,
      payload: [{id: 1}, {id: 2}]
    });

    expect(reducer(INITIAL_STATE.merge({
      fetching: false,
      error: false,
      payload: [{id: 1}, {id: 2}]
    }), {
      type: types.SELECT_ALERT,
      id: 2
    })).toEqual({
      fetching: false,
      error: false,
      payload: [{id: 1}, {id: 2, isSelected: true}]
    });
  });
});
