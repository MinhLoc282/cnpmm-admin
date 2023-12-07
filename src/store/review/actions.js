import {
  CREATE_REVIEW,
  CREATE_REVIEW_SUCCESS,
  CREATE_REVIEW_FAILED,
  GET_ALL_REVIEWS,
  GET_ALL_REVIEWS_SUCCESS,
  GET_ALL_REVIEWS_FAILED,
  DELETE_REVIEW,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAILED,
  UPDATE_REVIEW,
  UPDATE_REVIEW_SUCCESS,
  UPDATE_REVIEW_FAILED,
} from './actionTypes';

// CREATE_REVIEW
export const actionCreateReview = (payload) => ({
  type: CREATE_REVIEW,
  payload,
});

export const actionCreateReviewSuccess = (payload) => ({
  type: CREATE_REVIEW_SUCCESS,
  payload,
});

export const actionCreateReviewFailed = () => ({
  type: CREATE_REVIEW_FAILED,
});

// GET_ALL_REVIEWS
export const actionGetAllReviews = () => ({
  type: GET_ALL_REVIEWS,
});

export const actionGetAllReviewsSuccess = (payload) => ({
  type: GET_ALL_REVIEWS_SUCCESS,
  payload,
});

export const actionGetAllReviewsFailed = () => ({
  type: GET_ALL_REVIEWS_FAILED,
});

// DELETE_REVIEW
export const actionDeleteReview = (payload) => ({
  type: DELETE_REVIEW,
  payload,
});

export const actionDeleteReviewSuccess = (payload) => ({
  type: DELETE_REVIEW_SUCCESS,
  payload,
});

export const actionDeleteReviewFailed = () => ({
  type: DELETE_REVIEW_FAILED,
});

// UPDATE_REVIEW
export const actionUpdateReview = (payload) => ({
  type: UPDATE_REVIEW,
  payload,
});

export const actionUpdateReviewSuccess = (payload) => ({
  type: UPDATE_REVIEW_SUCCESS,
  payload,
});

export const actionUpdateReviewFailed = () => ({
  type: UPDATE_REVIEW_FAILED,
});