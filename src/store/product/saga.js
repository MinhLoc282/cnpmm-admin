import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import productAPI from 'apis/product/productAPI';

import axiosClient from 'utils/axios';

import {
  GET_ALL_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
} from './actionTypes';

import {
  actionGetAllProductSuccess,
  actionGetAllProductFailed,
  actionCreateProductSuccess,
  actionCreateProductFailed,
  actionUpdateProductSuccess,
  actionUpdateProductFailed,
} from './actions';

function* getAllProduct() {
  try {
    const response = yield call(productAPI.getAllProduct);
    yield put(actionGetAllProductSuccess(response.data));
  } catch (error) {
    yield put(actionGetAllProductFailed());
    toast.error(error.message);
  }
}

function* createProduct(action) {
  try {
    const token = localStorage.getItem('accessToken');

    axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    const response = yield call(productAPI.createProduct, action.payload);
    yield put(actionCreateProductSuccess(response.data));
    toast.success('Product created successfully!');
  } catch (error) {
    yield put(actionCreateProductFailed());
    toast.error(error.message);
  }
}

function* updateProduct(action) {
  try {
    const token = localStorage.getItem('accessToken');

    axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    const response = yield call(productAPI.updateProduct, action.payload);
    yield put(actionUpdateProductSuccess(response.data));
    toast.success('Product updated successfully!');
  } catch (error) {
    yield put(actionUpdateProductFailed());
    toast.error(error.message);
  }
}

export default function* productSaga() {
  yield takeLeading(GET_ALL_PRODUCT, getAllProduct);
  yield takeLeading(CREATE_PRODUCT, createProduct);
  yield takeLeading(UPDATE_PRODUCT, updateProduct);
}
