import { createStore, applyMiddleware, compose, Action } from "redux";
import createSagaMiddleware from 'redux-saga';
import logger from "redux-logger";

import rootSaga from './rootSaga';
import { rootReducer } from "./rootReducer";
import { ThunkAction } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware, logger));
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
