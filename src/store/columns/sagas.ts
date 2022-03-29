import { all, call, put, takeEvery } from 'redux-saga/effects';
import { columns, postColumn } from '../../services/APIService';
import { addColumn, changeIsDataLoading, setColumns } from './reducers';
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

export function* postColumnSaga({ payload: { title } }) {
  yield put(changeIsDataLoading({ isDataLoaded: true }))
  try {
    const response = yield postColumn(title)
    console.log('SAGA POST COLUMN', response)
    yield put(addColumn(response))
  } catch (error) {
    console.log('SAGA POST COLUMN ERROR', error)
  }
  yield put(changeIsDataLoading({ isDataLoaded: false }))
}

export function* onGetColumns() {
  yield takeEvery(types.GET_COLUMNS, getColumnsSaga);
}

export function* onPostColumn() {
  yield takeEvery(types.POST_COLUMN, postColumnSaga);
}

export function* columnsSagas() {
  yield all([
    call(onGetColumns),
    call(onPostColumn),
  ]);
}
