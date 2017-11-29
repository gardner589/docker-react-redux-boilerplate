import {call, put} from 'redux-saga/effects';
import fixtureApi from './utils/fixtureApi';

import {actions} from '../redux';
import getAlerts from '../sagas/getAlerts';


test('Test getAlerts successful saga', () => {
  const data = {test: true};
  const saga = getAlerts(fixtureApi, {data});
  expect(saga.next().value).toEqual(call(fixtureApi.getAlerts, data));
  expect(saga.next(fixtureApi.getAlerts({ok: true})).value).toEqual(put(actions.getAlertsSuccess([{}])));
});


test('Test getAlerts failure saga', () => {
  const data = {test: true};
  const saga = getAlerts(fixtureApi, {data});
  expect(saga.next().value).toEqual(call(fixtureApi.getAlerts, data));
  expect(saga.next(fixtureApi.getAlerts({ok: false})).value).toEqual(put(actions.getAlertsFailure()));
});
