import { all, call, put, takeEvery } from 'redux-saga/effects';
import { columns } from '../../services/APIService';
import { changeIsDataLoading, setColumns } from './reducers';
import types from './types';

export function* getColumnsSaga() {
  yield put(changeIsDataLoading({ isDataLoaded: true }))
  try {
    const response = yield columns()
    yield put(setColumns(response))
  } catch (error) {
    console.log('SAGA ERROR', error)
  }
  yield put(changeIsDataLoading({ isDataLoaded: false }))
}

export function* onGetColumns() {
  yield takeEvery(types.GET_COLUMNS, getColumnsSaga);
}

export function* columnsSagas() {
  yield all([
    call(onGetColumns),
  ]);
}
