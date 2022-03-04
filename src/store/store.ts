import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import logger from "redux-logger";

import { rootReducer } from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers =
//   (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// // const enhancer = composeEnhancers(
// //   applyMiddleware(sagaMiddleware)
// // );
// // const store = createStore(rootReducer, enhancer);
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export default store;
