import { createReducer } from "@reduxjs/toolkit";
import * as nameActs from "./actions.js";

export const initState = {
  errMess: null,
  successMess: null,
};

const { errMess: initErrMess } = initState;

const reducerRegister = createReducer(initState, {
  [nameActs.registerSuccess]: (state, action) => {
    const { data } = action.payload;
    console.log("21222122", data);
  },
});

export default reducerRegister;
