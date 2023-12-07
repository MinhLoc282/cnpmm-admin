import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionUpdateCoupon } from 'store/actions';

function UpdateCouponModalBody({ closeModal, extraObject }) {
  const dispatch = useDispatch();
  const [updatedName, setUpdatedName] = useState('');
  const [updatedExpiry, setUpdatedExpiry] = useState('');
  const [updatedDiscount, setUpdatedDiscount] = useState('');

  useEffect(() => {
    setUpdatedName(extraObject.name);
    setUpdatedExpiry(extraObject.expiry);
    setUpdatedDiscount(extraObject.discount);
  }, [extraObject]);

  const handleUpdateCoupon = async () => {
    dispatch(
      actionUpdateCoupon({
        id: extraObject._id,
        name: updatedName,
        expiry: updatedExpiry,
        discount: updatedDiscount,
      })
    );

    closeModal();
  };

  return (
    <>
      <p className="text-xl mt-8 text-center">Update the coupon details:</p>

      <div className="mb-4">
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Coupon Name"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <input
          type="date"
          className="input input-bordered w-full mb-4"
          value={updatedExpiry}
          onChange={(e) => setUpdatedExpiry(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <input
          type="number"
          className="input input-bordered w-full mb-4"
          placeholder="Discount"
          value={updatedDiscount}
          onChange={(e) => setUpdatedDiscount(e.target.value)}
        />
      </div>

      <div className="modal-action mt-4">
        <button className="btn btn-outline" onClick={() => closeModal()}>
          Cancel
        </button>

        <button className="btn btn-primary w-36 ml-4" onClick={handleUpdateCoupon}>
          Update Coupon
        </button>
      </div>
    </>
  );
}

export default UpdateCouponModalBody;
