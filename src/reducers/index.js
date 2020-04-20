import { combineReducers } from 'redux';

const rootReducer = (asyncReducers = {}) => {
    return combineReducers({
        ...asyncReducers,
    });
};
export default rootReducer;