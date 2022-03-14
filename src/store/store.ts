import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import logger from "redux-logger";

import rootSaga from './sagas';
import { rootReducer } from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware, logger));
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
