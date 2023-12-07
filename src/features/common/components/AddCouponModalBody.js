import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreateCoupon } from 'store/actions';

function AddCouponModalBody({ closeModal }) {
  const dispatch = useDispatch();
  const [couponName, setCouponName] = useState('');
  const [couponExpiry, setCouponExpiry] = useState('');
  const [couponDiscount, setCouponDiscount] = useState('');

  const handleAddCoupon = async () => {
    if (couponName.trim() === '' || couponExpiry.trim() === '' || couponDiscount.trim() === '') {
      return;
    }

    dispatch(actionCreateCoupon({ name: couponName, expiry: couponExpiry, discount: couponDiscount }));
    closeModal();
  };

  return (
    <>
      <p className="text-xl mt-8 text-center">Enter the coupon details:</p>

      <div className="mb-4">
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Coupon Name"
          value={couponName}
          onChange={(e) => setCouponName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <input
          type="date"
          className="input input-bordered w-full mb-4"
          placeholder="Expiry Date"
          value={couponExpiry}
          onChange={(e) => setCouponExpiry(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <input
          type="number"
          className="input input-bordered w-full mb-4"
          placeholder="Discount (%)"
          value={couponDiscount}
          onChange={(e) => setCouponDiscount(e.target.value)}
        />
      </div>

      <div className="modal-action mt-4">
        <button className="btn btn-outline" onClick={() => closeModal()}>
          Cancel
        </button>

        <button className="btn btn-primary w-36 ml-4" onClick={handleAddCoupon}>
          Add Coupon
        </button>
      </div>
    </>
  );
}

export default AddCouponModalBody;