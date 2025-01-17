import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { createInjectorsEnhancer } from "redux-injectors";

import createReducer from "../reducers";
import rootSaga from "../sagas";
// import history from 'app/routers/history';

const storeConfig = (initialState = {}) => {
  let reduxSagaMonitorOptions = {};
  // Dev Tools once it supports redux-saga version 1.x.x
  if (window.__SAGA_MONITOR_EXTENSION__) {
    reduxSagaMonitorOptions = {
      sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
    };
  }

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  // const routesMiddleware = routerMiddleware(history);

  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga: sagaMiddleware.run,
    }),
  ];
  const store = configureStore({
    reducer: createReducer(),
    preloadedState: initialState,
    middleware: [...getDefaultMiddleware(), ...middlewares],
    enhancers,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default storeConfig;
