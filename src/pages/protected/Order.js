import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import { actionGetAllOrders } from 'store/actions';
import { openModal } from 'features/common/modalSlice';
import { MODAL_BODY_TYPES } from 'utils/globalConstantUtil';

import ArrowPathIcon from '@heroicons/react/24/outline/ArrowPathIcon';

function InternalPage(){

    const dispatch = useDispatch();
    const orders = useSelector((state) => state.Order.orders);

    const handleUpdateOrderStatus = (couponId) => {
        const selectedOrder = orders.find((order) => order._id === couponId);

        dispatch(
            openModal({
                title: 'Update Order Status',
                bodyType: MODAL_BODY_TYPES.UPDATE_ORDER_STATUS,
                extraObject: selectedOrder,
            })
        );
    };

    useEffect(() => {
    dispatch(setPageTitle({ title: 'Order' }));
    dispatch(actionGetAllOrders());
    }, [dispatch]);

    return (
        <div className="h-4/5 bg-base-200">
            <div className="text-accent">
            <div className="max-w-md">
                <table className="table w-full mt-4">
                <thead>
                    <tr>
                    <th style={{ position: 'static', left: 'auto' }}>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Province</th>
                    <th>District</th>
                    <th>Ward</th>
                    <th>Note</th>
                    <th>Payment Method</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Order Time</th>
                    <th>Order By</th>
                    <th>Coupon</th>
                    <th>Products</th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.length > 0 ? (
                    orders.map((order) => (
                        <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{order.phoneNumber}</td>
                        <td>{order.addressShipping.province}</td>
                        <td>{order.addressShipping.district}</td>
                        <td>{order.addressShipping.ward}</td>
                        <td>{order.addressShipping.note}</td>
                        <td>{order.PaymentMethod}</td>
                        <td>{order.total}</td>
                        <td>{order.status}</td>
                        <td>{new Date(order.orderTime).toLocaleString()}</td>
                        <td>{`${order.orderby.firstname} ${order.orderby.lastname}`}</td>
                        <td>{order.coupon && order.coupon.code}</td>
                        <td>
                            {order.products.map((product) => (
                                <div key={product._id}>
                                    <p>{product.product.name}</p>
                                </div>
                            ))}
                        </td>
                        <td>
                            <button className="icon-btn" onClick={() => handleUpdateOrderStatus(order._id)}>
                                <ArrowPathIcon className="h-5 w-5" />
                            </button>
                        </td>
                        </tr>
                    ))
                    ) : (
                    <tr>
                        <td colSpan="13">No orders found</td>
                    </tr>
                    )}
                </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}

export default InternalPage