// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
const Category = lazy(() => import('../pages/protected/Category'))
const Coupon = lazy(() => import('../pages/protected/Coupon'))
const Customer = lazy(() => import('../pages/protected/Customer'))
const Order = lazy(() => import('../pages/protected/Order'))
const Product = lazy(() => import('../pages/protected/Product'))
const Review = lazy(() => import('../pages/protected/Review'))
const Room = lazy(() => import('../pages/protected/Room'))


const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/welcome',
    component: Welcome,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/product',
    component: Product,
  },
  {
    path: '/room',
    component: Room,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/customer',
    component: Customer,
  },
  {
    path: '/order',
    component: Order,
  },
  {
    path: '/review',
    component: Review,
  },
  {
    path: '/coupon',
    component: Coupon,
  },
  {
    path: '/404',
    component: Page404,
  },
]

export default routes
