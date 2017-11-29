import {call, put} from 'redux-saga/effects';
import {actions} from '../redux';

export default function* getAlerts (api, action) {
  const {data} = action;
  const response = yield call(api.getAlerts, data);
  if (response.ok) {
    yield put(actions.getAlertsSuccess(response.data));
  } else {
    yield put(actions.getAlertsFailure());
  }
}
