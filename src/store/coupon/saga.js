import { put, takeLeading, call } from 'redux-saga/effects';

import couponAPI from 'apis/coupon/couponAPI';

import axiosClient from 'utils/axios';

import {
  CREATE_COUPON,
  GET_ALL_COUPONS,
  DELETE_COUPON,
  UPDATE_COUPON,
} from './actionTypes';

import {
  actionCreateCouponSuccess,
  actionCreateCouponFailed,
  actionGetAllCouponsSuccess,
  actionGetAllCouponsFailed,
  actionDeleteCouponSuccess,
  actionDeleteCouponFailed,
  actionUpdateCouponSuccess,
  actionUpdateCouponFailed,
} from './actions';

function* getAllCoupons() {
  try {
    const response = yield call(couponAPI.getAllCoupons);

    yield put(actionGetAllCouponsSuccess(response.data));
  } catch (error) {
    yield put(actionGetAllCouponsFailed());
  }
}

function* createCoupon(action) {
  try {
    const token = localStorage.getItem('accessToken');

    axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    const response = yield call(couponAPI.createCoupon, action.payload);

    yield put(actionCreateCouponSuccess(response.data));
    
    const res = yield call(couponAPI.getAllCoupons);
    yield put(actionGetAllCouponsSuccess(res.data));
  } catch (error) {
    yield put(actionCreateCouponFailed());
  }
}

function* deleteCoupon(action) {
  try {
    const token = localStorage.getItem('accessToken');

    axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    yield call(couponAPI.deleteCoupon, action.payload);

    yield put(actionDeleteCouponSuccess(action.payload));
    
    const res = yield call(couponAPI.getAllCoupons);
    yield put(actionGetAllCouponsSuccess(res.data));
  } catch (error) {
    yield put(actionDeleteCouponFailed());
  }
}

function* updateCoupon(action) {
  try {
    const response = yield call(couponAPI.updateCoupon, action.payload);

    yield put(actionUpdateCouponSuccess(response.data));
    
    const res = yield call(couponAPI.getAllCoupons);
    yield put(actionGetAllCouponsSuccess(res.data));
  } catch (error) {
    yield put(actionUpdateCouponFailed());
  }
}

export default function* couponSaga() {
  yield takeLeading(GET_ALL_COUPONS, getAllCoupons);
  yield takeLeading(CREATE_COUPON, createCoupon);
  yield takeLeading(DELETE_COUPON, deleteCoupon);
  yield takeLeading(UPDATE_COUPON, updateCoupon);
}