import { all, call, put, takeEvery } from 'redux-saga/effects';
import types from './types';

import axios, { User } from '../../../api/axios';
import { logInSuccess, registerSuccess, logInFailure, registerFailure } from './reducers';

const logIn = async (email: string, password: string) => {
  const response = await axios.post<User>(`/auth/sign-in`, {
    email,
    password,
  })
  if (response.data.token) {
    return { user: response.data }
  } else {
    return { error: response.data }
  }
}

const register = async (email: string, name: string, password: string) => {
  const response = await axios.post<User>(`/auth/sign-up`, {
    email,
    name,
    password,
  })
  if (response.data.token) {
    return { user: response.data }
  } else {
    return { error: response.data }
  }
}

export function* logInSaga({ payload: { email, password } }) {
  try {
    const response = yield logIn(email, password)
    if (response.user) {
      yield put(logInSuccess(response))
    } else if (response.error) {
      yield put(logInFailure(response))
    }
  } catch (error) {
    yield put(logInFailure(error))
  }
}

export function* registerSaga({ payload: { email, name, password } }) {
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
