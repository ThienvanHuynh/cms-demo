import { put, take, fork, call } from "redux-saga/effects";
import * as ApiCall from "./apiCall";
import * as nameActs from "./actions";
import * as nameConst from "./const";

function* loginSaga() {
  while (true) {
    yield take(nameConst.LOGIN);
    // yield put(loadingOpen());
    const getResult = yield call(ApiCall.loginCallApi);
    console.log("getResult", getResult);
    if (getResult.status === 200) {
      yield put(nameActs.loginSuccess(getResult.data));
    } else {
      yield put(nameActs.loginFailed(getResult.errMess));
    }

    // yield put(loadingClose());
  }
}

export default function* root() {
  yield fork(loginSaga);
}
