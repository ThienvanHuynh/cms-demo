
import { put, take, fork, call } from 'redux-saga/effects';
import * as ApiCall from './apiCall';
import * as nameActs from './actions';
import * as nameConst from './const';


function* getCategoriesSaga() {
    while (true) {
        yield take(nameConst.GET_CATEGORIES);
        // yield put(loadingOpen());
        const getResult = yield call(ApiCall.getCategoriesCallApi);
        console.log('getResult', getResult)
        if (getResult.status === 200) {
            yield put(nameActs.getCategoriesSuccess(getResult.data));
        } else {
            yield put(nameActs.getCategoriesFailed(getResult.errMess));
        }

        // yield put(loadingClose());
    }
}

export default function* root() {
    yield fork(getCategoriesSaga);

}