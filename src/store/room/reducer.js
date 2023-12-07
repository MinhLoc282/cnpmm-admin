import {
  GET_ALL_ROOM,
  GET_ALL_ROOM_SUCCESS,
  GET_ALL_ROOM_FAILED,
  CREATE_ROOM,
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  rooms: [],
};

const category = (state = initialState, action) => {
  switch (action.type) {
    // GET_ALL_ROOM
    case GET_ALL_ROOM:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_ROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        rooms: action.payload,
      };

    case GET_ALL_ROOM_FAILED:
      return {
        ...state,
        loading: false,
      };

    // CREATE_ROOM
    case CREATE_ROOM:
      return {
        ...state,
        loading: true,
      };

    case CREATE_ROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        rooms: action.payload,
      };

    case CREATE_ROOM_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default category;
