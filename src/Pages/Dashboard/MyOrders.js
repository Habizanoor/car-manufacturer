import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
    const [orderss, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?buyer=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])
    const handlePayment = () => {
        // navigate('/makePayment');
        toast('Payment done');
    }
    const handleRemove = () => {
        toast('Product removed')
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Buyer Name</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Your Order</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderss.map((order, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{order.buyerName}</td>
                                <td>{order.buyer}</td>
                                <td>{order.productName}</td>
                                <td>{order.yourOrder}</td>
                                <td>
                                    <button onClick={handlePayment} className="btn btn-xs">Pay Now</button>
                                    <button onClick={handleRemove} className="btn btn-xs">Remove</button>
                                </td>
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;