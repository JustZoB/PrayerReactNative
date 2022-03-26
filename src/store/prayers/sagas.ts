import { all, call, put, takeEvery } from 'redux-saga/effects';
import { postPrayer, prayers } from '../../services/APIService';
import { addPrayer, changeIsDataLoading, setPrayers } from './reducers';
import types from './types';

export function* getPrayersSaga() {
  yield put(changeIsDataLoading({ isDataLoaded: true }))
  try {
    const response = yield prayers()
    console.log('SAGA PRAYER', response)
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
    console.log('SAGA POST PRAYER', response)
    yield put(addPrayer(response))
  } catch (error) {
    console.log('SAGA POST PRAYER ERROR', error)
  }
  yield put(changeIsDataLoading({ isDataLoaded: false }))
}

export function* onGetPrayers() {
  yield takeEvery(types.GET_PRAYERS, getPrayersSaga);
}

export function* onPostPrayer() {
  yield takeEvery(types.POST_PRAYER, postPrayerSaga);
}

export function* prayersSagas() {
  yield all([
    call(onGetPrayers),
    call(onPostPrayer),
  ]);
}
