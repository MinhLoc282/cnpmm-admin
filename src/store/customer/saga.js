import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import authAPI from 'apis/auth/authAPI';

import axiosClient from 'utils/axios';

import {
  GET_ALL_USER, DELETE_USER,
} from './actionTypes';

import {
  actionGetAllUserSuccess,
  actionGetAllUserFailed,
  actionDeleteUserSuccess,
  actionDeleteUserFailed,
} from './actions';

function* getAllUser() {
  try {
    const token = localStorage.getItem('accessToken');

    axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    const response = yield call(authAPI.getAllUser);
    yield put(actionGetAllUserSuccess(response.data));
  } catch (error) {
    yield put(actionGetAllUserFailed());
    toast.error(error.message);
  }
}

function* deleteUser({ payload }) {
  try {
    const token = localStorage.getItem('accessToken');

    axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    const response = yield call(authAPI.deleteUser, payload);
    yield put(actionDeleteUserSuccess(response.data));
    toast.success('User deleted successfully!');
  } catch (error) {
    yield put(actionDeleteUserFailed());
    toast.error(error.message);
  }
}

export default function* productSaga() {
  yield takeLeading(GET_ALL_USER, getAllUser);
  yield takeLeading(DELETE_USER, deleteUser);
}
