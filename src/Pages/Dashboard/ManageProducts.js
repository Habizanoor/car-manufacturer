import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageProducts = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tool')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    const handleDelete = id =>{
        toast.error('make sure you want to delete');
    }
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
                                <td><button onClick={handleDelete} className="btn btn-outline btn-error">Delete</button></td>
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;