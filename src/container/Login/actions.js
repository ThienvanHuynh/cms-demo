import { createAction } from '@reduxjs/toolkit';
import * as nameConst from './const';

const getCategories = createAction(nameConst.GET_CATEGORIES);
const getCategoriesSuccess = createAction(nameConst.GET_CATEGORIES_SUCCESS, data => ({ payload: { data } }));
const getCategoriesFailed = createAction(nameConst.GET_CATEGORIES_FAILED, error => ({ error }));

export {
    getCategories,
    getCategoriesSuccess,
    getCategoriesFailed
}