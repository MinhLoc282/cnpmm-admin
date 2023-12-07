import { combineReducers } from 'redux';

import Login from 'store/auth/login/reducer';
import RefreshToken from 'store/auth/refreshToken/reducer';
import Logout from 'store/auth/logout/reducer';

import Category from 'store/catagory/reducer';
import Product from 'store/product/reducer';
import Room from 'store/room/reducer';
import Customer from 'store/customer/reducer';
import Coupon from 'store/coupon/reducer';
import Order from 'store/order/reducer';
import Review from 'store/review/reducer';

import headerSlice from '../features/common/headerSlice'
import modalSlice from '../features/common/modalSlice'
import rightDrawerSlice from '../features/common/rightDrawerSlice'
import leadsSlice from '../features/leads/leadSlice'

const rootReducer = combineReducers({
  Login,
  RefreshToken,
  Logout,

  Category,
  Product,
  Room,
  Customer,
  Coupon,
  Order,
  Review,

  header : headerSlice,
  rightDrawer : rightDrawerSlice,
  modal : modalSlice,
  lead : leadsSlice
});

export default rootReducer;
