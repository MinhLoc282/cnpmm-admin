import {
  GET_ALL_CATEGORY,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAILED,
  CREATE_CATEGORY,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILED,
} from './actionTypes';

// GET_ALL_CATEGORY
export const actionGetAllCategory = () => ({
  type: GET_ALL_CATEGORY,
});

export const actionGetAllCategorySuccess = (payload) => ({
  type: GET_ALL_CATEGORY_SUCCESS,
  payload,
});

export const actionGetAllCategoryFailed = () => ({
  type: GET_ALL_CATEGORY_FAILED,
});

// CREATE_CATEGORY
export const actionCreateCategory = (payload) => ({
  type: CREATE_CATEGORY,
  payload
});

export const actionCreateCategorySuccess = (payload) => ({
  type: CREATE_CATEGORY_SUCCESS,
  payload,
});

export const actionCreateCategoryFailed = () => ({
  type: CREATE_CATEGORY_FAILED,
});