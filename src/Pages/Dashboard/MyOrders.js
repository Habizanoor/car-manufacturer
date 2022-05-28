import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orderss, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?buyer=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                
                <thead>
                    <tr>
                        <th></th>
                        <th>Buyer Name</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Your Ordered Quantity</th>
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
                            </tr>
                        )
                    }
                    

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;