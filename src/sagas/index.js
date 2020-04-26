import { all, fork } from 'redux-saga/effects';

import sagaCategory from '../container/Login/saga'


export default function* rootSaga() {
    yield all([fork(sagaCategory)]);
}
