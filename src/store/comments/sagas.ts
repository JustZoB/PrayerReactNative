import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getComments, postComment } from './APIService';
import { addComment, changeIsDataLoading, setComments } from './reducers';
import types from './types';

export function* getCommentsSaga() {
  yield put(changeIsDataLoading({ isDataLoaded: true }))
  try {
    const response = yield getComments()
    yield put(setComments(response))
  } catch (error) {
    console.log('SAGA ERROR', error)
  }
  yield put(changeIsDataLoading({ isDataLoaded: false }))
}

export function* postCommentSaga({ payload: { body, prayerId } }) {
  yield put(changeIsDataLoading({ isDataLoaded: true }))
  try {
    const response = yield postComment(body, prayerId)
    yield put(addComment(response))
  } catch (error) {
    console.log('SAGA POST COMMENT ERROR', error)
  }
  yield put(changeIsDataLoading({ isDataLoaded: false }))
}

export function* onGetComments() {
  yield takeEvery(types.GET_COMMENTS, getCommentsSaga);
}

export function* onPostComment() {
  yield takeEvery(types.POST_COMMENT, postCommentSaga);
}

export function* commentsSagas() {
  yield all([
    call(onGetComments),
    call(onPostComment),
  ]);
}
