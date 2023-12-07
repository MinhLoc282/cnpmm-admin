import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreateRoom } from 'store/actions';

function AddRoomModalBody({ closeModal }) {
  const dispatch = useDispatch();
  const [roomName, setRoomName] = useState('');

  const handleAddRoom = async () => {
    if (roomName.trim() === '') {
      // Add validation or show an error message
      return;
    }

    dispatch(actionCreateRoom({ nameRoom: roomName }));
    closeModal();
  };

  return (
    <>
      <p className="text-xl mt-8 text-center">Enter the room details:</p>

      <div className="mb-4">
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
      </div>

      <div className="modal-action mt-4">
        <button className="btn btn-outline" onClick={() => closeModal()}>
          Cancel
        </button>

        <button className="btn btn-primary w-36 ml-4" onClick={handleAddRoom}>
          Add Room
        </button>
      </div>
    </>
  );
}

export default AddRoomModalBody;
