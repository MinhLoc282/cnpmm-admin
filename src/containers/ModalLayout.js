import { useEffect } from 'react'
import { MODAL_BODY_TYPES } from '../utils/globalConstantUtil'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../features/common/modalSlice'
import AddLeadModalBody from '../features/leads/components/AddLeadModalBody'
import ConfirmationModalBody from '../features/common/components/ConfirmationModalBody'
import AddCategoryModalBody from 'features/common/components/AddCategoryModalBody'
import AddProductModalBody  from 'features/common/components/AddProductModalBody'
import UpdateProductModalBody  from 'features/common/components/UpdateProductModalBody'
import AddRoomModalBody  from 'features/common/components/AddRoomModalBody'
import AddCouponModalBody from 'features/common/components/AddCouponModalBody'
import UpdateCouponModalBody from 'features/common/components/UpdateCouponModalBody'
import UpdateReviewModalBody from 'features/common/components/UpdateReviewModalBody'
import UpdateOrderStatusModalBody from 'features/common/components/UpdateOrderStatusModalBody'

function ModalLayout(){


    const {isOpen, bodyType, size, extraObject, title} = useSelector(state => state.modal)
    const dispatch = useDispatch()

    const close = (e) => {
        dispatch(closeModal(e))
    }



    return(
        <>
        {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <div className={`modal ${isOpen ? "modal-open" : ""}`}>
            <div className={`modal-box  ${size === 'lg' ? 'max-w-5xl' : ''}`}>
                <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => close()}>✕</button>
                <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>


                {/* Loading modal body according to different modal type */}
                {
                    {
                             [MODAL_BODY_TYPES.LEAD_ADD_NEW] : <AddLeadModalBody closeModal={close} extraObject={extraObject}/>,
                             [MODAL_BODY_TYPES.CONFIRMATION] : <ConfirmationModalBody extraObject={extraObject} closeModal={close}/>,
                             [MODAL_BODY_TYPES.ADD_CATEGORY] : <AddCategoryModalBody extraObject={extraObject} closeModal={close}/>,
                             [MODAL_BODY_TYPES.ADD_PRODUCT] : <AddProductModalBody extraObject={extraObject} closeModal={close}/>,
                             [MODAL_BODY_TYPES.UPDATE_PRODUCT] : <UpdateProductModalBody extraObject={extraObject} closeModal={close}/>,
                             [MODAL_BODY_TYPES.ADD_ROOM] : <AddRoomModalBody extraObject={extraObject} closeModal={close}/>,
                             [MODAL_BODY_TYPES.UPDATE_REVIEW]: <UpdateReviewModalBody extraObject={extraObject} closeModal={close} />,
                            [MODAL_BODY_TYPES.UPDATE_ORDER_STATUS]: <UpdateOrderStatusModalBody extraObject={extraObject} closeModal={close} />,
                            [MODAL_BODY_TYPES.UPDATE_COUPON]: <UpdateCouponModalBody extraObject={extraObject} closeModal={close} />,
                            [MODAL_BODY_TYPES.ADD_COUPON]: <AddCouponModalBody extraObject={extraObject} closeModal={close} />,
                             [MODAL_BODY_TYPES.DEFAULT] : <div></div>
                    }[bodyType]
                }
            </div>
            </div>
            </>
    )
}

export default ModalLayout