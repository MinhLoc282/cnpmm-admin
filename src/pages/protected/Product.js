import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import { actionGetAllProduct } from 'store/actions';
import { openModal } from 'features/common/modalSlice';
import { MODAL_BODY_TYPES } from 'utils/globalConstantUtil';

import ArrowPathIcon from '@heroicons/react/24/outline/ArrowPathIcon';

function InternalPage(){
    const dispatch = useDispatch();
    const products = useSelector((state) => state.Product.allProducts);

    const handleUpdateProduct = (couponId) => {
        const selectedProduct = products.find((product) => product._id === couponId);

        dispatch(
            openModal({
                title: 'Update Product',
                bodyType: MODAL_BODY_TYPES.UPDATE_PRODUCT,
                extraObject: selectedProduct,
            })
        );
    };

    useEffect(() => {
    dispatch(setPageTitle({ title: 'Products' }));
    dispatch(actionGetAllProduct());
    }, [dispatch]);

    const handleOpenModal = () => {
    dispatch(
        openModal({
        title: 'Add Product',
        bodyType: MODAL_BODY_TYPES.ADD_PRODUCT,
        })
    );
    };

    return (
    <div className="h-4/5 bg-base-200">
        <div className="text-accent">
        <div className="max-w-md">
            <button className="btn" onClick={handleOpenModal}>
                Add Product
            </button>

            <table className="table w-full mt-4">
            <thead>
                <tr>
                <th style={{ position: 'static', left: 'auto' }}>ID</th>
                <th>Code</th>
                <th>Name</th>
                <th>Slug</th>
                <th>Description</th>
                <th>Short Description</th>
                <th>Images</th>
                <th>Category</th>
                <th>Room</th>
                <th>Specs</th>
                <th>Price</th>
                <th>Sale</th>
                <th>Price Sale</th>
                <th>Quantity</th>
                <th>Total Rating</th>
                </tr>
            </thead>
            <tbody>
                {products ? (
                products.map((product) => (
                    <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.code}</td>
                    <td>{product.name}</td>
                    <td>{product.slug}</td>
                    <td>{product.description}</td>
                    <td>{product.shortDescription}</td>
                    <td>
                        {product.images.map((image) => (
                            <img key={image._id} src={image.url} alt={`Product ${product.name}`} />
                        ))}
                    </td>
                    <td>{product.category}</td>
                    <td>{product.room}</td>
                    <td>
                        {product.specs.map((spec) => (
                            <div key={spec._id}>
                            <strong>{spec.k}:</strong> {spec.v}
                            </div>
                        ))}
                    </td>
                    <td>{product.price}</td>
                    <td>{product.sale}</td>
                    <td>{product.priceSale}</td>
                    <td>{product.quantity}</td>
                    <td>{product.totalrating}</td>
                    <td>
                        <button className="icon-btn" onClick={() => handleUpdateProduct(product._id)}>
                            <ArrowPathIcon className="h-5 w-5" />
                        </button>
                    </td>
                    </tr>
                ))
                ) : (
                <tr>
                    <td colSpan="4">No products found</td>
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