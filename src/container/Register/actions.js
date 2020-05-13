import { createAction } from "@reduxjs/toolkit";
import * as nameConst from "./consts";

const register = createAction(nameConst.REGISTER);
const registerSuccess = createAction(nameConst.REGISTER_SUCCESS, (data) => ({
  payload: { data },
}));
const registerFailed = createAction(nameConst.REGISTER_FAILED, (error) => ({
  error,
}));

export { register, registerSuccess, registerFailed };
