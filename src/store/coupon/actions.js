import {
  CREATE_COUPON,
  CREATE_COUPON_SUCCESS,
  CREATE_COUPON_FAILED,
  GET_ALL_COUPONS,
  GET_ALL_COUPONS_SUCCESS,
  GET_ALL_COUPONS_FAILED,
  DELETE_COUPON,
  DELETE_COUPON_SUCCESS,
  DELETE_COUPON_FAILED,
  UPDATE_COUPON,
  UPDATE_COUPON_SUCCESS,
  UPDATE_COUPON_FAILED,
} from './actionTypes';

// CREATE_COUPON
export const actionCreateCoupon = (payload) => ({
  type: CREATE_COUPON,
  payload,
});

export const actionCreateCouponSuccess = (payload) => ({
  type: CREATE_COUPON_SUCCESS,
  payload,
});

export const actionCreateCouponFailed = () => ({
  type: CREATE_COUPON_FAILED,
});

// GET_ALL_COUPONS
export const actionGetAllCoupons = () => ({
  type: GET_ALL_COUPONS,
});

export const actionGetAllCouponsSuccess = (payload) => ({
  type: GET_ALL_COUPONS_SUCCESS,
  payload,
});

export const actionGetAllCouponsFailed = () => ({
  type: GET_ALL_COUPONS_FAILED,
});

// DELETE_COUPON
export const actionDeleteCoupon = (payload) => ({
  type: DELETE_COUPON,
  payload,
});

export const actionDeleteCouponSuccess = (payload) => ({
  type: DELETE_COUPON_SUCCESS,
  payload,
});

export const actionDeleteCouponFailed = () => ({
  type: DELETE_COUPON_FAILED,
});

// UPDATE_COUPON
export const actionUpdateCoupon = (payload) => ({
  type: UPDATE_COUPON,
  payload,
});

export const actionUpdateCouponSuccess = (payload) => ({
  type: UPDATE_COUPON_SUCCESS,
  payload,
});

export const actionUpdateCouponFailed = () => ({
  type: UPDATE_COUPON_FAILED,
});