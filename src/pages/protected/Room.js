import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import { actionGetAllRoom } from 'store/actions';
import { openModal } from 'features/common/modalSlice';
import { MODAL_BODY_TYPES } from 'utils/globalConstantUtil';

function InternalPage(){
    const dispatch = useDispatch();
    const rooms = useSelector((state) => state.Room.rooms);

    useEffect(() => {
        dispatch(setPageTitle({ title: 'Rooms' }));
        dispatch(actionGetAllRoom());
    }, [dispatch]);

    const handleOpenModal = () => {
        dispatch(
        openModal({
            title: 'Add Room',
            bodyType: MODAL_BODY_TYPES.ADD_ROOM,
        })
        );
    };

    return (
        <div className="h-4/5 bg-base-200">
        <div className="text-accent">
            <div className="max-w-md">
            <button className="btn" onClick={handleOpenModal}>
                Add Room
            </button>

            <table className="table w-full mt-4">
                <thead>
                <tr>
                    <th style={{ position: 'static', left: 'auto' }}>ID</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {rooms ? (
                    rooms.map((room) => (
                    <tr key={room._id}>
                        <td>{room._id}</td>
                        <td>{room.nameRoom}</td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan="2">No rooms found</td>
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