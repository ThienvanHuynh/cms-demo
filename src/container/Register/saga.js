import { put, take, fork, call } from "redux-saga/effects";
import * as nameConst from "./consts";
import register, * as nameAction from "./actions";
import * as apiCall from "./apiCall";

function* registerSaga() {
  while (true) {
    const data = yield take(nameConst.REGISTER);
    console.log("dataaaa", data);
    const result = yield call(apiCall.registerCallApi, data.payload);
    console.log("-------->", result);
  }
}

export default function* root() {
  yield fork(registerSaga);
}
