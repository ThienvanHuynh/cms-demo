import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
import rootReducer from '../reducers/index.js'

const storeConfig = (initialState = {}) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
}
export default storeConfig;

