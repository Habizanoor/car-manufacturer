import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';


const PurchasePage = ({ perchase }) => {
    const {_id, name, price, minOrderQuantity, availableQuantity} = perchase;
    const [user, loading] = useAuthState(auth)
    const handleAbc = () => {
        console.log('connected with the button');
    }
    const handlepurchase = event => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const minOrder = parseInt(event.target.minOrder.value);
        const yourOrder = parseInt(event.target.yourOrder.value);
        const available = parseInt(event.target.available.value);
        const address = event.target.address.value;
        if(yourOrder < minOrder){
           toast.error('have to order more');
        //    acknowledged: false 
        
        }
        
        else if(yourOrder > available){
            toast('Over available items');
        }
        else{
            toast('Added');
        }
        if (loading ) {
            return <Loading></Loading>
        }
        const order ={
            perchaseId: _id,
            productName: name,
            yourOrder: yourOrder,
            price: price,
            minOrderQuantity: minOrderQuantity,
            availableQuantity: availableQuantity,
            buyer: user.email,
            buyerName:user.displayName,
            phone: phone,
            address: address
            
        }

        fetch('http://localhost:5000/order',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())

        .then(data => {
            
            console.log(data);
        })
        console.log(name, email, phone, minOrder, yourOrder, available, address);
    }
    return (
        <div>
            <div className="hero py-10 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={perchase.picture} className="max-w-sm rounded-lg shadow-2xl" alt=""/>
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <h3 className="py-6 text-4xl">{perchase.price}</h3>
                        <h5 className='text-xl'>Minimum Order Quantity: {perchase.minOrderQuantity}</h5>
                        <h5 className='text-xl'>Available Quantity: {perchase.availableQuantity}</h5>
                        <p className="py-6">{perchase.description}</p>
                        <label onClick={handleAbc} for="place-order" className="btn modal-button">Place order</label>
                    </div>

                    <input type="checkbox" id="place-order" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                        <label htmlFor="place-order" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <form onSubmit={handlepurchase} className='grid grid-cols-1 gap-2 justify-items-center mt-2' >
                                {/* modal  */}

                                <input type="text" name='buyerName' disabled value={user?.displayName || ""} className="input input-bordered w-full max-w-xs" />
                                <input type="email" name="email" disabled value={user?.email || ""} className="input input-bordered w-full max-w-xs" />
                                <input type="text" name='name' disabled value={perchase.name} className="input input-bordered w-full max-w-xs" />
                                <input type="number" name='minOrder' disabled value={perchase.minOrderQuantity} placeholder="Minimum Order Quantity" className="input input-bordered w-full max-w-xs" />
                                <input type="number" name='yourOrder' placeholder="Your Order" className="input input-bordered w-full max-w-xs" required/>
                                <input type="number" name='available' disabled value={perchase.availableQuantity} placeholder="Available Products" className="input input-bordered w-full max-w-xs" />
                                <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                                <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                                <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" /> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PurchasePage;