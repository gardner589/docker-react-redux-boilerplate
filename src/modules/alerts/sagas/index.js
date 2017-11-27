import {takeLatest} from 'redux-saga/effects';
import {types} from '../redux';
import getAlerts from './getAlerts';

export default (api) => [
  takeLatest(types.GET_ALERTS_REQUEST, getAlerts, api),
];
