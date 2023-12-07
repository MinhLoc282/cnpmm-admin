import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import { actionDeleteUser, actionGetAllUser } from 'store/actions'

import TrashIcon from '@heroicons/react/24/outline/TrashIcon';

function InternalPage(){
    const dispatch = useDispatch()
    const customers = useSelector((state) => state.Customer.users);

    const handleDeleteUser = (couponId) => {
        dispatch(actionDeleteUser({id: couponId}))
    };

    useEffect(() => {
        dispatch(setPageTitle({ title : "Customer"}))
        dispatch(actionGetAllUser())
    }, [dispatch])
    
    return(
        <div className="h-4/5 bg-base-200">
            <div className="text-accent">
                <div className="max-w-md">

                <table className="table w-full">
                        <thead>
                            <tr>
                            <th style={{ position: 'static', left: 'auto' }}>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phonenumber</th>
                            <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers ? (
                                customers.map((customer) => (
                                <tr key={customer._id}>
                                    <td>{customer._id}</td>
                                    <td>{customer.firstname}</td>
                                    <td>{customer.lastname}</td>
                                    <td>{customer.username}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phoneNumber}</td>
                                    <td>{customer.role}</td>

                                    <td>
                                        <button className="icon-btn" onClick={() => handleDeleteUser(customer._id)}>
                                            <TrashIcon className="h-5 w-5" />
                                        </button>
                                    </td>
                                </tr>
                                ))
                            ) : (
                                <tr>
                                <td colSpan="2">No customers found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default InternalPage