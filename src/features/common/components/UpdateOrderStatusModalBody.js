import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionUpdateOrderStatus } from 'store/actions';

function UpdateOrderStatusModalBody({ closeModal, extraObject }) {
  const dispatch = useDispatch();
  const [updatedStatus, setUpdatedStatus] = useState('');

  useEffect(() => {
    setUpdatedStatus(extraObject.status);
  }, [extraObject]);

  const handleUpdateOrderStatus = async () => {
    dispatch(
      actionUpdateOrderStatus({
        id: extraObject._id,
        status: updatedStatus,
      })
    );

    closeModal();
  };

  return (
    <>
      <p className="text-xl mt-8 text-center">Update the order status:</p>

      <div className="mb-4">
        <label className="label">Select Order Status:</label>
        <select
          className="select select-bordered w-full"
          value={updatedStatus}
          onChange={(e) => setUpdatedStatus(e.target.value)}
        >
          <option value="Processing">Processing</option>
          <option value="Dispatched">Dispatched</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>

      <div className="modal-action mt-4">
        <button className="btn btn-outline" onClick={() => closeModal()}>
          Cancel
        </button>

        <button className="btn btn-primary w-36 ml-4" onClick={handleUpdateOrderStatus}>
          Update Order Status
        </button>
      </div>
    </>
  );
}

export default UpdateOrderStatusModalBody;
