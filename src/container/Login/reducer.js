import { createReducer } from '@reduxjs/toolkit';
import * as nameActs from './actions';

export const initState = {
    errMess: null,
    categoriesList: null,
};
const { errMess: initErrMess } = initState;

const reducerCategories = createReducer(initState, {
    [nameActs.getCategoriesSuccess]: (state, action) => {
        console.log('2121212121', initState)

        const { data } = action.payload;
        console.log('get success', data)
        state.errMess = initErrMess;
        state.categoriesList = data;
    },
    [nameActs.getCategoriesFailed]: (state, action) => {
        const { error } = action;

        state.errMess = error;
    },
});

export default reducerCategories;