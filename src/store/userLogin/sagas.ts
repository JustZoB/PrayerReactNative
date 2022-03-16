import { all, call, put, takeEvery } from 'redux-saga/effects';
import types from './types';

import axios, { User } from '../../../api/axios';
import { logInFailure, registerFailure } from './action';
import { logInSuccess, registerSuccess } from './reducers';

const logIn = async (email: string, password: string) => {
  const response = await axios.post<User>(`/auth/sign-in`, {
    email,
    password,
  })
  return { user: response.data }
}

const register = async (email: string, name: string, password: string) => {
  const response = await axios.post<User>(`/auth/sign-up`, {
    email,
    name,
    password,
  })
  return { user: response.data }
}

export function* logInSaga({ payload: { email, password } }) {
  try {
    const user = yield logIn(email, password)
    yield put(logInSuccess(user))

  } catch (error) {
    yield put(logInFailure(error))
  }
}

export function* registerSaga({ payload: { email, name, password } }) {
  try {
    const user = yield register(email, name, password)
    yield put(registerSuccess(user))

  } catch (error) {
    yield put(registerFailure(error))
  }
}

export function* logInAfterRegister({ payload: { email, password } }) {
  yield logInSaga({ payload: { email, password } });
}

export function* onLogInStart() {
  yield takeEvery(types.LOG_IN_START, logInSaga);
}

export function* onRegisterStart() {
  yield takeEvery(types.REGISTER_START, registerSaga);
}

export function* onRegisterSuccess() {
  yield takeEvery(types.REGISTER_SUCCESS, logInAfterRegister);
}

export function* authSagas() {
  yield all([
    call(onLogInStart),
    call(onRegisterStart),
    call(onRegisterSuccess),
  ]);
}
