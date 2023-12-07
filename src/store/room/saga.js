import { put, takeLeading, call } from 'redux-saga/effects';

import roomAPI from 'apis/room/roomAPI';

import axiosClient from 'utils/axios';

import {
  GET_ALL_ROOM,
  CREATE_ROOM,
} from './actionTypes';
import {
  actionGetAllRoomSuccess,
  actionGetAllRoomFailed,
  actionCreateRoomSuccess,
  actionCreateRoomFailed,
} from './actions';

function* getAllRoom() {
  try {
    const response = yield call(roomAPI.getAllRoom);

    yield put(actionGetAllRoomSuccess(response.data));
  } catch (error) {
    yield put(actionGetAllRoomFailed());
  }
}

function* createRoom({ payload }) {
  try {
    const token = localStorage.getItem('accessToken');

    axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    const response = yield call(roomAPI.createRoom, payload);

    yield put(actionCreateRoomSuccess(response.data));
  } catch (error) {
    yield put(actionCreateRoomFailed());
  }
}

export default function* categorySaga() {
  yield takeLeading(GET_ALL_ROOM, getAllRoom);
  yield takeLeading(CREATE_ROOM, createRoom);
}
