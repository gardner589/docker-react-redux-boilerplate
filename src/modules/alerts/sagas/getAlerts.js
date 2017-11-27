import {delay} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {actions} from '../redux';

export default function* getAlerts (api, action) {
  console.log(api, action);
  /*** mock api request for now */
  yield call(delay, 1000);
  yield put(actions.getAlertsSuccess([{id: 1, title: 'Alert 1'}, {id: 2, title: 'Alert 2'}]));
  // Would really look more like:
  // const { data } = action;
  // const response = yield call(api.getAlerts, data);
  // if (response.ok) {
  //   yield put(actions.getAlertsSuccess(response.data));
  // } else {
  //   yield put(actions.getAlertsFailure());
  // }
}
