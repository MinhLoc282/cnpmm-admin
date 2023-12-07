import {
  GET_ALL_CATEGORY,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAILED,
  CREATE_CATEGORY,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  categories: [],
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
    case CREATE_CATEGORY:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };

    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: [...state.categories, action.payload],
      };

    case GET_ALL_CATEGORY_FAILED:
    case CREATE_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default category;
