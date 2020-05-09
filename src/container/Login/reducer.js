import { createReducer } from "@reduxjs/toolkit";
import * as nameActs from "./actions";

export const initState = {
  errMess: null,
  username: null,
  phone: null,
};
const { errMess: initErrMess } = initState;

const reducerLogin = createReducer(initState, {
  [nameActs.LoginSuccess]: (state, action) => {
    console.log("2121212121", initState);

    const { data } = action.payload;
    console.log("get success", data);
    state.errMess = initErrMess;
    state.username = data.username;
    state.phone = data.phone;
  },
  [nameActs.getCategoriesFailed]: (state, action) => {
    const { error } = action;

    state.errMess = error;
  },
});

export default reducerLogin;
