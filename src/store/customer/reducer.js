import {
  GET_ALL_USER,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_FAILED,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case GET_ALL_USER_FAILED:
      return {
        ...state,
        loading: false,
      };

    case DELETE_USER:
      return {
        ...state,
        loading: true,
      };

    case DELETE_USER_SUCCESS:
      const updatedUsers = state.users.filter(user => user._id !== action.payload.id);

      return {
        ...state,
        loading: false,
        users: updatedUsers,
      };

    case DELETE_USER_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
