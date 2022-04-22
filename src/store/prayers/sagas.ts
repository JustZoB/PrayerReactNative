import { all, call, put, takeEvery } from 'redux-saga/effects';
import { postPrayer, getPrayers, checkPrayer, deletePrayer } from './APIService';
import { addPrayer, changeIsDataLoading, removePrayer, setPrayers, updatePrayer } from './reducers';
import types from './types';

export function* getPrayersSaga() {
  yield put(changeIsDataLoading({ isDataLoaded: true }))
  try {
    const response = yield getPrayers()
    yield put(setPrayers(response))
  } catch (error) {
    console.log('SAGA ERROR', error)
  }
  yield put(changeIsDataLoading({ isDataLoaded: false }))
}

export function* postPrayerSaga({ payload: { title, columnId } }) {
  yield put(changeIsDataLoading({ isDataLoaded: true }))
  try {
    const response = yield postPrayer(title, columnId)
    yield put(addPrayer(response))
  } catch (error) {
    console.log('SAGA POST PRAYER ERROR', error)
  }
  yield put(changeIsDataLoading({ isDataLoaded: false }))
}

export function* checkPrayerSaga({ payload: { id, checked } }) {
  yield put(changeIsDataLoading({ isDataLoaded: true }))
  try {
    const response = yield checkPrayer(id, checked)
    yield put(updatePrayer(response))
  } catch (error) {
    console.log('SAGA PUT PRAYER ERROR', error)
  }
  yield put(changeIsDataLoading({ isDataLoaded: false }))
}

export function* deletePrayerSaga({ payload: { id } }) {
  yield put(changeIsDataLoading({ isDataLoaded: true }))
  try {
    const response = yield deletePrayer(id)
    yield put(removePrayer(response))
  } catch (error) {
    console.log('SAGA DELETE PRAYER ERROR', error)
  }
  yield put(changeIsDataLoading({ isDataLoaded: false }))
}

export function* onGetPrayers() {
  yield takeEvery(types.GET_PRAYERS, getPrayersSaga);
}

export function* onPostPrayer() {
  yield takeEvery(types.POST_PRAYER, postPrayerSaga);
}

export function* onCheckPrayer() {
  yield takeEvery(types.CHECK_PRAYER, checkPrayerSaga);
}

export function* onDeletePrayer() {
  yield takeEvery(types.DELETE_PRAYER, deletePrayerSaga);
}

export function* prayersSagas() {
  yield all([
    call(onGetPrayers),
    call(onPostPrayer),
    call(onCheckPrayer),
    call(onDeletePrayer),
  ]);
}
