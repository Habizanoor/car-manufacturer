import React from 'react';

const AddAProduct = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-10">
            <div className="card-body">
                <form className='grid grid-cols-1 gap-2 justify-items-center mt-2' >
                    <input type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xl" />
                    <input type="number" name='price' placeholder="Price" className="input input-bordered w-full max-w-xl" />
                    <input type="number" name='minOrderQuantity' placeholder="Minimum Order Quantity" className="input input-bordered w-full max-w-xl" />
                    <input type="number" name='availableQuantity' placeholder="Available Quantity" className="input input-bordered w-full max-w-xl" />
                    <textarea name="description" className="textarea w-full max-w-xs textarea-bordered" placeholder="Description..."></textarea>
                    <input type="file" name="picture" id="" />
                    <input className='btn btn-outline' type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default AddAProduct;