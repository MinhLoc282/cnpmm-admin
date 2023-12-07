import { put, takeLeading, call } from 'redux-saga/effects';

import categoryAPI from 'apis/category/categoryAPI';

import axiosClient from 'utils/axios';

import { GET_ALL_CATEGORY, CREATE_CATEGORY } from './actionTypes';
import {
  actionGetAllCategorySuccess,
  actionGetAllCategoryFailed,
  actionCreateCategorySuccess,
  actionCreateCategoryFailed,
} from './actions';

function* getAllCategory() {
  try {
    const response = yield call(categoryAPI.getAllCategory);

    yield put(actionGetAllCategorySuccess(response.data));
  } catch (error) {
    yield put(actionGetAllCategoryFailed());
  }
}

function* createCategory(action) {
  try {
    const token = localStorage.getItem('accessToken');

    axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    const response = yield call(categoryAPI.createCategory, action.payload);

    yield put(actionCreateCategorySuccess(response.data));
    
    const res = yield call(categoryAPI.getAllCategory)
    yield put(actionGetAllCategorySuccess(res.data));
  } catch (error) {
    yield put(actionCreateCategoryFailed());
  }
}

export default function* categorySaga() {
  yield takeLeading(GET_ALL_CATEGORY, getAllCategory);
  yield takeLeading(CREATE_CATEGORY, createCategory);
}
