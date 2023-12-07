import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import authAPI from 'apis/auth/authAPI';
import axiosClient from 'utils/axios';

import { LOGOUT } from './actionTypes';
import {
  actionLogoutSuccess,
  actionLogoutFailed,
} from './actions';

function* logout() {
  try {
    yield call(authAPI.logout);

    localStorage.removeItem('accessToken');

    axiosClient.defaults.headers.Authorization = '';

    yield put(actionLogoutSuccess());

    toast.success('Logged out successfully');
  } catch (error) {
    toast.error(error.message);

    yield put(actionLogoutFailed());
  }
}

export default function* logoutSaga() {
  yield takeLeading(LOGOUT, logout);
}
