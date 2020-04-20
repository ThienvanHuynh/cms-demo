import { all, fork } from 'redux-saga/effects';


function* mySaga() {
    yield console.log('okay saga');
}

export default function* rootSaga() {
    yield all([fork(mySaga)]);
}
