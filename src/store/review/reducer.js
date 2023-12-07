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

const initialState = {
  loading: false,
  reviews: [],
};

const review = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
    case GET_ALL_REVIEWS:
    case DELETE_REVIEW:
    case UPDATE_REVIEW:
      return {
        ...state,
        loading: true,
      };

    case CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: [...state.reviews, action.payload],
      };

    case GET_ALL_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: action.payload,
      };

    case DELETE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: state.reviews.filter((review) => review._id !== action.payload),
      };

    case UPDATE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: state.reviews.map((review) =>
          review._id === action.payload._id ? action.payload : review
        ),
      };

    case CREATE_REVIEW_FAILED:
    case GET_ALL_REVIEWS_FAILED:
    case DELETE_REVIEW_FAILED:
    case UPDATE_REVIEW_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default review;