import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { AlertsActions } from '../redux';

export default function * getAlerts (api, action) {

  console.log(api, action);

  /*** mock api request for now */
  const response = yield call(delay, 1000);
  yield put(AlertsActions.getAlertsSuccess([{
      id: 1,
      title: 'Alert 1',
    }, {
      id: 2,
      title: 'Alert 2',
    }])
  );

  // Would really look more like:
  // const { data } = action;
  // const response = yield call(api.getAlerts, data);
  // if (response.ok) {
  //   yield put(AlertsActions.getAlertsSuccess(response.data));
  // } else {
  //   yield put(AlertsActions.getAlertsFailure());
  // }

}
