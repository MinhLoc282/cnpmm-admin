import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionUpdateProduct, actionGetAllCategory, actionGetAllRoom } from 'store/actions';

function UpdateProductModalBody({ extraObject, closeModal }) {
  const dispatch = useDispatch();
  const [updatedProductDetails, setUpdatedProductDetails] = useState({ ...extraObject });

  const categories = useSelector((state) => state.Category.categories);
  const rooms = useSelector((state) => state.Room.rooms);

  useEffect(() => {
    dispatch(actionGetAllCategory());
    dispatch(actionGetAllRoom());
  }, [dispatch]);

  const handleUpdateProduct = async () => {

    dispatch(actionUpdateProduct(updatedProductDetails));
    closeModal();
  };

  const handleChange = (field, value) => {
    setUpdatedProductDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  return (
    <>
      <p className="text-xl mt-8 text-center">Update the product details:</p>

      <div className="mb-4">
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Product Code"
          value={updatedProductDetails.code}
          onChange={(e) => handleChange('code', e.target.value)}
        />
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Product Name"
          value={updatedProductDetails.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <textarea
          className="textarea textarea-bordered w-full mb-4"
          placeholder="Product Description"
          value={updatedProductDetails.description}
          onChange={(e) => handleChange('description', e.target.value)}
        ></textarea>
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Short Description"
          value={updatedProductDetails.shortDescription}
          onChange={(e) => handleChange('shortDescription', e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="label">Product Images:</label>
        <input
          type="text"
          className="input input-bordered w-full mb-2"
          placeholder="Image URL"
          value={updatedProductDetails.images}
          onChange={(e) => handleChange('images', [e.target.value])}
        />
        <p className="text-xs text-gray-500 mb-2">Enter image URLs separated by commas</p>
      </div>

      <div className="mb-4">
        <label className="label">Select Category:</label>
        <select
          className="select select-bordered w-full mb-2"
          value={updatedProductDetails.category}
          onChange={(e) => handleChange('category', e.target.value)}
        >
          <option value="" disabled>
            Select Category
          </option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.nameCate}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="label">Select Room:</label>
        <select
          className="select select-bordered w-full mb-2"
          value={updatedProductDetails.room}
          onChange={(e) => handleChange('room', e.target.value)}
        >
          <option value="" disabled>
            Select Room
          </option>
          {rooms.map((room) => (
            <option key={room._id} value={room._id}>
              {room.nameRoom}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="label">Specifications:</label>
        {updatedProductDetails.specs.map((spec, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              className="input input-bordered w-full mb-2"
              placeholder="Key"
              value={spec.k}
              onChange={(e) => handleChange(`specs.${index}.k`, e.target.value)}
            />
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Value"
              value={spec.v}
              onChange={(e) => handleChange(`specs.${index}.v`, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="mb-4">
        <input
          type="number"
          className="input input-bordered w-full mb-2"
          placeholder="Product Price"
          value={updatedProductDetails.price}
          onChange={(e) => handleChange('price', e.target.value)}
        />
        <input
          type="number"
          className="input input-bordered w-full"
          placeholder="Product Quantity"
          value={updatedProductDetails.quantity}
          onChange={(e) => handleChange('quantity', e.target.value)}
        />
      </div>

      <div className="modal-action mt-4">
        <button className="btn btn-outline" onClick={() => closeModal()}>
          Cancel
        </button>
        <button className="btn btn-primary w-36 ml-4" onClick={handleUpdateProduct}>
          Update Product
        </button>
      </div>
    </>
  );
}

export default UpdateProductModalBody;
