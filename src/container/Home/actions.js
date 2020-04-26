import { createAction } from '@reduxjs/toolkit';

import * as nameConst from './const';

const getUser = createAction(nameConst.GET_USER);
const getUserSuccess = createAction(nameConst.GET_USER_SUCCESS, (data) => ({ payload: { data } }));
const getUserFailed = createAction(nameConst.GET_USER_FAILED, (err) => ({ err }));

export {
    getUser,
    getUserSuccess,
    getUserFailed
}