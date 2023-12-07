import {
  GET_ALL_PRODUCT,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAILED,
  CREATE_PRODUCT,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILED,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  allProducts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
    case CREATE_PRODUCT:
    case UPDATE_PRODUCT:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        allProducts: action.payload,
      };

    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        allProducts: [...state.allProducts, action.payload],
      };

    case UPDATE_PRODUCT_SUCCESS:
      const updatedProducts = state.allProducts.map(product =>
        product.id === action.payload.id ? action.payload : product
      );

      return {
        ...state,
        loading: false,
        allProducts: updatedProducts,
      };

    case GET_ALL_PRODUCT_FAILED:
    case CREATE_PRODUCT_FAILED:
    case UPDATE_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default productReducer;
