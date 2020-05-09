import { createAction } from "@reduxjs/toolkit";
import * as nameConst from "./const";

const login = createAction(nameConst.LOGIN);
const loginSuccess = createAction(nameConst.LOGIN_SUCCESS, (data) => ({
  payload: { data },
}));
const loginFailed = createAction(nameConst.LOGIN_FAILED, (error) => ({
  error,
}));

export { login, loginSuccess, loginFailed };
