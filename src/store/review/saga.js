import { put, takeLeading, call } from 'redux-saga/effects';

import reviewAPI from 'apis/review/reviewAPI';

import axiosClient from 'utils/axios';

import {
  CREATE_REVIEW,
  GET_ALL_REVIEWS,
  DELETE_REVIEW,
  UPDATE_REVIEW,
} from './actionTypes';

import {
  actionCreateReviewSuccess,
  actionCreateReviewFailed,
  actionGetAllReviewsSuccess,
  actionGetAllReviewsFailed,
  actionDeleteReviewSuccess,
  actionDeleteReviewFailed,
  actionUpdateReviewSuccess,
  actionUpdateReviewFailed,
} from './actions';

function* getAllReviews() {
  try {
    const response = yield call(reviewAPI.getAllReviews);

    yield put(actionGetAllReviewsSuccess(response.data));
  } catch (error) {
    yield put(actionGetAllReviewsFailed());
  }
}

function* createReview(action) {
  try {
    const token = localStorage.getItem('accessToken');

    axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    const response = yield call(reviewAPI.createReview, action.payload);

    yield put(actionCreateReviewSuccess(response.data));
    
    const res = yield call(reviewAPI.getAllReviews);
    yield put(actionGetAllReviewsSuccess(res.data));
  } catch (error) {
    yield put(actionCreateReviewFailed());
  }
}

function* deleteReview(action) {
  try {
    const token = localStorage.getItem('accessToken');

    axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    yield call(reviewAPI.deleteReview, action.payload);

    yield put(actionDeleteReviewSuccess(action.payload));
    
    const res = yield call(reviewAPI.getAllReviews);
    yield put(actionGetAllReviewsSuccess(res.data));
  } catch (error) {
    yield put(actionDeleteReviewFailed());
  }
}

function* updateReview(action) {
  try {
    const token = localStorage.getItem('accessToken');

    axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    const response = yield call(reviewAPI.updateReview, action.payload);

    yield put(actionUpdateReviewSuccess(response.data));
    
    const res = yield call(reviewAPI.getAllReviews);
    yield put(actionGetAllReviewsSuccess(res.data));
  } catch (error) {
    yield put(actionUpdateReviewFailed());
  }
}

export default function* ReviewSaga() {
  yield takeLeading(GET_ALL_REVIEWS, getAllReviews);
  yield takeLeading(CREATE_REVIEW, createReview);
  yield takeLeading(DELETE_REVIEW, deleteReview);
  yield takeLeading(UPDATE_REVIEW, updateReview);
}