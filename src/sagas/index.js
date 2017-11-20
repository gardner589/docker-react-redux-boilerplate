/*** This is an index of all sagas from each module */

import { all } from 'redux-saga/effects';
import API from '../services/api';


/*** Sagas */

import alertsSaga from '../modules/alerts/sagas';


/*** Api */

const api = API.create();


/** Stitch together sagas */

export default function * rootSaga () {

  yield all([
    ...alertsSaga(api),
  ]);

}
