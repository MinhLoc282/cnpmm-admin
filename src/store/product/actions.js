import {
  GET_ALL_PRODUCT,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAILED,
  CREATE_PRODUCT,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILED,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
} from './actionTypes';

export const actionGetAllProduct = () => ({
  type: GET_ALL_PRODUCT,
});

export const actionGetAllProductSuccess = (payload) => ({
  type: GET_ALL_PRODUCT_SUCCESS,
  payload,
});

export const actionGetAllProductFailed = () => ({
  type: GET_ALL_PRODUCT_FAILED,
});

export const actionCreateProduct = () => ({
  type: CREATE_PRODUCT,
});

export const actionCreateProductSuccess = (payload) => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload,
});

export const actionCreateProductFailed = () => ({
  type: CREATE_PRODUCT_FAILED,
});

export const actionUpdateProduct = () => ({
  type: UPDATE_PRODUCT,
});

export const actionUpdateProductSuccess = (payload) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload,
});

export const actionUpdateProductFailed = () => ({
  type: UPDATE_PRODUCT_FAILED,
});