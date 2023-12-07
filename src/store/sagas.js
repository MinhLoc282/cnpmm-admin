import { all, fork } from 'redux-saga/effects';

import Login from 'store/auth/login/saga';
import RefreshToken from 'store/auth/refreshToken/saga';
import Logout from 'store/auth/logout/saga';

import Catagory from 'store/catagory/saga';
import Product from 'store/product/saga';
import Room from 'store/room/saga';
import Customer from 'store/customer/saga';
import Coupon from 'store/coupon/saga';
import Order from 'store/order/saga';
import Review from 'store/review/saga';

export default function* rootSaga() {
  yield all([
    fork(Login),
    fork(RefreshToken),
    fork(Logout),

    fork(Catagory),
    fork(Product),
    fork(Room),
    fork(Customer),
    fork(Order),
    fork(Coupon),
    fork(Review),
  ]);
}
