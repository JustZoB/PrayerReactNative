import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import types from './types';

import { logInSuccess, registerSuccess, logInFailure, registerFailure, changeLoading, changeIsDataLoading, setToken } from './reducers';
import { getTokenAsyncStorage, setItem } from '../../services/asyncStorage';
import { logIn, register } from '../../services/APIService';

export function* logInSaga({ payload: { email, password } }) {
  yield put(changeLoading({ loading: true }))
  try {
    const response = yield logIn(email, password)
    if (response.user) {
      yield put(logInSuccess(response))
      setItem('userToken', response.user.token)
      setItem('userName', response.user.name)
      setItem('userEmail', response.user.email)
    } else if (response.error) {
      yield put(logInFailure(response))
    }
  } catch (error) {
    yield put(logInFailure(error))
  }
  yield put(changeLoading({ loading: false }))
}

export function* registerSaga({ payload: { email, name, password } }) {
  yield put(changeLoading({ loading: true }))
  try {
    const response = yield register(email, name, password)
    if (response.user) {
      yield put(registerSuccess(response))
    } else if (response.error) {
      yield put(registerFailure(response))
    }
  } catch (error) {
    yield put(registerFailure(error))
  }
  yield put(changeLoading({ loading: false }))
}

export function* getTokenSaga() {
  yield put(changeIsDataLoading({ isDataLoaded: true }))
  try {
    const response = yield getTokenAsyncStorage()
    console.log('saga', response)
    yield put(setToken(response))
  } catch (error) {
    console.log('saga error', error)
  }
  yield put(changeIsDataLoading({ isDataLoaded: false }))
}

export function* onLogInStart() {
  yield takeEvery(types.LOG_IN_START, logInSaga);
}

export function* onRegisterStart() {
  yield takeEvery(types.REGISTER_START, registerSaga);
}

export function* onGetToken() {
  yield takeEvery(types.GET_TOKEN_START, getTokenSaga);
}

export function* authSagas() {
  yield all([
    call(onLogInStart),
    call(onRegisterStart),
    call(onGetToken),
  ]);
}
