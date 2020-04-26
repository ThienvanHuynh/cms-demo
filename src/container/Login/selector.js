import { createSelector } from 'reselect';
import { initState } from './reducer';

const selectCategories = state => state['reducerCategories'] || initState;

const makeSelectCategoriesData = () =>
    createSelector(selectCategories, item => {
        console.log('item', item)
        return item.categoriesList;
    });

const makeSelectCategoriesError = () => createSelector(selectCategories, item => item.errMess);

export { makeSelectCategoriesData, makeSelectCategoriesError };
