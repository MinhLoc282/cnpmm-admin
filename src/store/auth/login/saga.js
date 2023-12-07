import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import authAPI from 'apis/auth/authAPI';
import { removeSpacesWithTrim } from 'utils';
import axiosClient from 'utils/axios';

import { LOGIN } from './actionTypes';
import {
  actionLoginSuccess,
  actionLoginFailed,
} from './actions';

function* login({ payload }) {
  try {
    const {
      loginObj: {
        username,
        password,
      },

      callback,
    } = payload;

    const newData = removeSpacesWithTrim({
      username,
      password,
    });

    const response = yield call(authAPI.login, newData);

    localStorage.setItem('accessToken', response.data.token);

    yield put(actionLoginSuccess(response.data));

    axiosClient.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;
    callback();
  } catch (error) {
    yield put(actionLoginFailed());
  }
}

export default function* loginSaga() {
  yield takeLeading(LOGIN, login);
}
