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

const initialState = {
  loading: false,
  coupons: [],
};

const coupon = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COUPON:
    case GET_ALL_COUPONS:
    case DELETE_COUPON:
    case UPDATE_COUPON:
      return {
        ...state,
        loading: true,
      };

    case CREATE_COUPON_SUCCESS:
      return {
        ...state,
        loading: false,
        coupons: [...state.coupons, action.payload],
      };

    case GET_ALL_COUPONS_SUCCESS:
      return {
        ...state,
        loading: false,
        coupons: action.payload,
      };

    case DELETE_COUPON_SUCCESS:
      return {
        ...state,
        loading: false,
        coupons: state.coupons.filter((coupon) => coupon._id !== action.payload),
      };

    case UPDATE_COUPON_SUCCESS:
      return {
        ...state,
        loading: false,
        coupons: state.coupons.map((coupon) =>
          coupon._id === action.payload._id ? action.payload : coupon
        ),
      };

    case CREATE_COUPON_FAILED:
    case GET_ALL_COUPONS_FAILED:
    case DELETE_COUPON_FAILED:
    case UPDATE_COUPON_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default coupon;