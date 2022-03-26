import { all, call } from 'redux-saga/effects';
import { columnsSagas } from './columns/sagas';
import { prayersSagas } from './prayers/sagas';
import { authSagas } from './userLogin/sagas';

export default function* rootSaga() {
  yield all([
    call(authSagas),
    call(columnsSagas),
    call(prayersSagas),
  ]);
}
