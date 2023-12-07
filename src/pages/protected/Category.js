import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import { actionGetAllCategory } from 'store/actions';
import { openModal } from 'features/common/modalSlice';
import { MODAL_BODY_TYPES } from 'utils/globalConstantUtil';

function InternalPage() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.Category.categories);

    useEffect(() => {
        dispatch(setPageTitle({ title: 'Category' }));
        dispatch(actionGetAllCategory());
    }, [dispatch]);

    const handleOpenModal = () => {
        dispatch(openModal({title : "Add Category", 
        bodyType : MODAL_BODY_TYPES.ADD_CATEGORY}))
    };

    return (
        <div className="h-4/5 bg-base-200">
        <div className="text-accent">
            <div className="max-w-md">
            <button className="btn" onClick={handleOpenModal}>
                Add Category
            </button>

            <table className="table w-full mt-4">
                <thead>
                <tr>
                    <th style={{ position: 'static', left: 'auto' }}>ID</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {categories ? (
                    categories.map((category) => (
                    <tr key={category._id}>
                        <td>{category._id}</td>
                        <td>{category.nameCate}</td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan="2">No categories found</td>
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
