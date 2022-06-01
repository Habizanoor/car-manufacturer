import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-reef-16634.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Min Quantity</th>
                        <th>Available</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tools.map((tool, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{tool.name}</td>
                                <td>{tool.price}</td>
                                <td>{tool.minOrderQuantity}</td>
                                <td>{tool.availableQuantity}</td>
                                <td>Shipped</td>
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;