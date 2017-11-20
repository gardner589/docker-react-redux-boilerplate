import { takeLatest } from 'redux-saga/effects';
import { AlertsTypes } from '../redux';
import getAlerts from './getAlerts';

export default (api) => [
  takeLatest(AlertsTypes.GET_ALERTS_REQUEST, getAlerts, api),
]
