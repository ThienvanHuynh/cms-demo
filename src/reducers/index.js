import { combineReducers } from 'redux';


const rootReducer = (asyncReducers = {}) => {
    return combineReducers({
        // router: connectRouter(history),
        // reducerLoadingApp,
        ...asyncReducers,
    });
};
export default rootReducer;