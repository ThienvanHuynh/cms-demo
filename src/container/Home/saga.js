import { put, fork, take, call } from 'redux-saga/effects';
import * as nameConst from './const';
import * as nameAct from './actions';
import * as ApiCall from './apiCall';

function* getUserSaga() {
    while (true) {
        yield take(nameConst.GET_USER);

        const result = yield call(ApiCall.getUserCallApi);
        console.log(result);

        if (result.status === 200) {
            yield put(nameAct.getUserSuccess(result.data));
        } else {
            yield put(nameAct.getUserFailed(result.errMess))
        }
    }
}

export default function* root() {
    yield fork(getUserSaga)
}