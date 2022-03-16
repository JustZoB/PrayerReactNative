import { all, call, fork } from 'redux-saga/effects';
import { authSagas } from './loginSaga';

export default function* rootSaga() {
  yield all([call(authSagas)]);
}
