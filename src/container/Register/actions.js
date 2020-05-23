import { createAction } from "@reduxjs/toolkit";
import * as nameConst from "./consts";

const registerAPI = createAction(nameConst.REGISTER);
const registerSuccess = createAction(nameConst.REGISTER_SUCCESS, (data) => ({
  payload: { data },
}));
const registerFailed = createAction(nameConst.REGISTER_FAILED, (error) => ({
  error,
}));

export { registerAPI, registerSuccess, registerFailed };
