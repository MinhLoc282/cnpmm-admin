import { put, takeLeading, call } from 'redux-saga/effects';

import orderAPI from 'apis/order/orderAPI';

import axiosClient from 'utils/axios';

import {
  CREATE_ORDER,
  GET_ALL_ORDERS,
  UPDATE_ORDER_STATUS,
} from './actionTypes';

import {
  actionCreateOrderSuccess,
  actionCreateOrderFailed,
  actionGetAllOrdersSuccess,
  actionGetAllOrdersFailed,
  actionUpdateOrderStatusSuccess,
  actionUpdateOrderStatusFailed,
} from './actions';

function* getAllOrders() {
  try {
    const token = localStorage.getItem('accessToken');

    axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    const response = yield call(orderAPI.getAllOrders);

    yield put(actionGetAllOrdersSuccess(response.data));
  } catch (error) {
    yield put(actionGetAllOrdersFailed());
  }
}

function* createOrder(action) {
  try {
    const token = localStorage.getItem('accessToken');

    axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    const response = yield call(orderAPI.createOrder, action.payload);

    yield put(actionCreateOrderSuccess(response.data));
    
    const res = yield call(orderAPI.getAllOrders);
    yield put(actionGetAllOrdersSuccess(res.data));
  } catch (error) {
    yield put(actionCreateOrderFailed());
  }
}

function* updateOrderStatus(action) {
  try {
    const token = localStorage.getItem('accessToken');

    axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    const response = yield call(orderAPI.updateOrder, action.payload);

    yield put(actionUpdateOrderStatusSuccess(response.data));
    
    const res = yield call(orderAPI.getAllOrders);
    yield put(actionGetAllOrdersSuccess(res.data));
  } catch (error) {
    yield put(actionUpdateOrderStatusFailed());
  }
}

export default function* orderSaga() {
  yield takeLeading(GET_ALL_ORDERS, getAllOrders);
  yield takeLeading(CREATE_ORDER, createOrder);
  yield takeLeading(UPDATE_ORDER_STATUS, updateOrderStatus);
}
