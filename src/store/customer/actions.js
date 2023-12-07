import {
  GET_ALL_USER,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_FAILED,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} from './actionTypes';

export const actionGetAllUser = () => ({
  type: GET_ALL_USER,
});

export const actionGetAllUserSuccess = (payload) => ({
  type: GET_ALL_USER_SUCCESS,
  payload,
});

export const actionGetAllUserFailed = () => ({
  type: GET_ALL_USER_FAILED,
});

export const actionDeleteUser = (payload) => ({
  type: DELETE_USER,
  payload,
});

export const actionDeleteUserSuccess = (payload) => ({
  type: DELETE_USER_SUCCESS,
  payload,
});

export const actionDeleteUserFailed = () => ({
  type: DELETE_USER_FAILED,
});