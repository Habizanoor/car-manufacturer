import React from 'react';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddAProduct = () => {
    
    const addProduct = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const minOrderQuantity = event.target.minOrderQuantity.value;
        const availableQuantity = event.target.availableQuantity.value;
        const description = event.target.description.value;
        const picture = event.target.picture.value;

        const addProduct ={
            name: name,
            price: price,
            minOrderQuantity:minOrderQuantity,
            availableQuantity:availableQuantity,
            description:description,
            picture:picture
        }
        fetch('http://localhost:5000/tool',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(addProduct)
        })
        .then(res => res.json())

        .then(data => {
            toast('Product Added')
            console.log(data);
        })

        console.log(name,price,minOrderQuantity, availableQuantity, description,picture);

    }
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-10">
            <div className="card-body">
                <form onSubmit={addProduct} className='grid grid-cols-1 gap-2 justify-items-center mt-2' >
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