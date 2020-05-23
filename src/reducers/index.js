import { combineReducers } from "redux";
import reducerRegister from "../container/Register/reducer";

const rootReducer = (asyncReducers = {}) => {
  return combineReducers({
    // router: connectRouter(history),
    // reducerLoadingApp,
    reducerRegister,
    ...asyncReducers,
  });
};
export default rootReducer;
