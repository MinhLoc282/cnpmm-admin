import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import { actionDeleteCoupon, actionGetAllCoupons } from 'store/actions';
import { openModal } from 'features/common/modalSlice';
import { MODAL_BODY_TYPES } from 'utils/globalConstantUtil';

import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import ArrowPathIcon from '@heroicons/react/24/outline/ArrowPathIcon';

function InternalPage() {
    const dispatch = useDispatch();
    const coupons = useSelector((state) => state.Coupon.coupons);

    const handleUpdateCoupon = (couponId) => {
        const selectedCoupon = coupons.find((coupon) => coupon._id === couponId);

        dispatch(
            openModal({
                title: 'Update Coupon',
                bodyType: MODAL_BODY_TYPES.UPDATE_COUPON,
                extraObject: selectedCoupon,
            },)
        );
    };

    const handleDeleteCoupon = (couponId) => {
        dispatch(actionDeleteCoupon({id: couponId}))
    };

    useEffect(() => {
        dispatch(setPageTitle({ title: 'Coupons' }));
        dispatch(actionGetAllCoupons());
    }, [dispatch]);

    const handleOpenModal = () => {
        dispatch(
            openModal({
                title: 'Add Coupon',
                bodyType: MODAL_BODY_TYPES.ADD_COUPON,
            })
        );
    };

    return (
        <div className="h-4/5 bg-base-200">
            <div className="text-accent">
                <div className="max-w-md">
                    <button className="btn" onClick={handleOpenModal}>
                        Add Coupon
                    </button>

                    <table className="table w-full mt-4">
                        <thead>
                            <tr>
                                <th style={{ position: 'static', left: 'auto' }}>ID</th>
                                <th>Name</th>
                                <th>Code</th>
                                <th>Expiry</th>
                                <th>Discount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coupons.length > 0 ? (
                                coupons.map((coupon) => (
                                    <tr key={coupon._id}>
                                        <td>{coupon._id}</td>
                                        <td>{coupon.name}</td>
                                        <td>{coupon.code}</td>
                                        <td>{new Date(coupon.expiry).toLocaleDateString()}</td>
                                        <td>{coupon.discount}</td>
                                        <td>
                                            <button className="icon-btn" onClick={() => handleUpdateCoupon(coupon._id)}>
                                                <ArrowPathIcon className="h-5 w-5" />
                                            </button>
                                            <button className="icon-btn" onClick={() => handleDeleteCoupon(coupon._id)}>
                                                <TrashIcon className="h-5 w-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6">No coupons found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default InternalPage;
