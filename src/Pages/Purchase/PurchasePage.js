import React from 'react';
import PurchaseModal from './PurchaseModal';

const PurchasePage = ({ perchase }) => {
    const handleAbc = () =>{
        console.log('connected with the button');
    }
    return (
        <div>
            <div className="hero py-10 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={perchase.picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{perchase.name}</h1>
                        <h3 className="py-6 text-4xl">{perchase.price}</h3>
                        <h5 className='text-xl'>Minimum Order Quantity: {perchase.minOrderQuantity}</h5>
                        <h5 className='text-xl'>Available Quantity: {perchase.availableQuantity}</h5>
                        <p className="py-6">{perchase.description}</p>
                        <button onClick={handleAbc} className="btn btn-primary">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;