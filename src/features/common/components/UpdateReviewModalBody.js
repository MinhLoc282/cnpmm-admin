import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionUpdateReview } from 'store/actions';

function UpdateReviewModalBody({ closeModal, extraObject }) {
  const dispatch = useDispatch();
  const [updatedStar, setUpdatedStar] = useState('');
  const [updatedComment, setUpdatedComment] = useState('');

  useEffect(() => {
    setUpdatedStar(extraObject.star);
    setUpdatedComment(extraObject.comment);
  }, [extraObject]);

  const handleUpdateReview = async () => {
    dispatch(actionUpdateReview({ id: extraObject._id, star: updatedStar, comment: updatedComment }));

    closeModal();
  };

  return (
    <>
      <p className="text-xl mt-8 text-center">Update the review details:</p>

      <div className="mb-4">
        <input
          type="number"
          className="input input-bordered w-full mb-4"
          placeholder="Star"
          value={updatedStar}
          onChange={(e) => setUpdatedStar(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Comment"
          value={updatedComment}
          onChange={(e) => setUpdatedComment(e.target.value)}
        />
      </div>

      <div className="modal-action mt-4">
        <button className="btn btn-outline" onClick={() => closeModal()}>
          Cancel
        </button>

        <button className="btn btn-primary w-36 ml-4" onClick={handleUpdateReview}>
          Update Review
        </button>
      </div>
    </>
  );
}

export default UpdateReviewModalBody;
