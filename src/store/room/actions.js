import {
  GET_ALL_ROOM,
  GET_ALL_ROOM_SUCCESS,
  GET_ALL_ROOM_FAILED,
  CREATE_ROOM,
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_FAILED,
} from './actionTypes';

// GET_ALL_ROOM
export const actionGetAllRoom = () => ({
  type: GET_ALL_ROOM,
});

export const actionGetAllRoomSuccess = (payload) => ({
  type: GET_ALL_ROOM_SUCCESS,
  payload,
});

export const actionGetAllRoomFailed = () => ({
  type: GET_ALL_ROOM_FAILED,
});

// CREATE_ROOM
export const actionCreateRoom = (payload) => ({
  type: CREATE_ROOM,
  payload,
});

export const actionCreateRoomSuccess = (payload) => ({
  type: CREATE_ROOM_SUCCESS,
  payload,
});

export const actionCreateRoomFailed = () => ({
  type: CREATE_ROOM_FAILED,
});
