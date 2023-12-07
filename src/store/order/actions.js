import {
  CREATE_ORDER,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  GET_ALL_ORDERS,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAILED,
  UPDATE_ORDER_STATUS,
  UPDATE_ORDER_STATUS_SUCCESS,
  UPDATE_ORDER_STATUS_FAILED,
} from './actionTypes';

// Create Order
export const actionCreateOrder = (payload) => ({
  type: CREATE_ORDER,
  payload,
});

export const actionCreateOrderSuccess = (payload) => ({
  type: CREATE_ORDER_SUCCESS,
  payload,
});

export const actionCreateOrderFailed = () => ({
  type: CREATE_ORDER_FAILED,
});

// Get All Orders
export const actionGetAllOrders = () => ({
  type: GET_ALL_ORDERS,
});

export const actionGetAllOrdersSuccess = (payload) => ({
  type: GET_ALL_ORDERS_SUCCESS,
  payload,
});

export const actionGetAllOrdersFailed = () => ({
  type: GET_ALL_ORDERS_FAILED,
});

// Update Status of Order
export const actionUpdateOrderStatus = (payload) => ({
  type: UPDATE_ORDER_STATUS,
  payload,
});

export const actionUpdateOrderStatusSuccess = (payload) => ({
  type: UPDATE_ORDER_STATUS_SUCCESS,
  payload,
});

export const actionUpdateOrderStatusFailed = () => ({
  type: UPDATE_ORDER_STATUS_FAILED,
});