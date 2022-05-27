import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const PurchasePage = ({ perchase }) => {
    const [user, loading, error] = useAuthState(auth)
    const handleAbc = () => {
        console.log('connected with the button');
    }
    const Cdm = event => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const minOrder = parseInt(event.target.minOrder.value);
        const yourOrder = parseInt(event.target.yourOrder.value);
        const available = parseInt(event.target.available.value);
        const address = event.target.address.value;
        if(yourOrder<minOrder){
            console.log('aro dew te');
        }
        if(yourOrder>available){
            console.log('beshi oigece');
        }

        console.log(name, email, phone, minOrder, yourOrder, available, address);
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
                        <label onClick={handleAbc} for="place-order" class="btn modal-button">Place order</label>
                    </div>

                    <input type="checkbox" id="place-order" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                        <label htmlFor="place-order" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <form onSubmit={Cdm} className='grid grid-cols-1 gap-2 justify-items-center mt-2' >
                                {/* modal  */}

                                <input type="text" name='name' disabled value={user?.displayName || ""} className="input input-bordered w-full max-w-xs" />
                                <input type="email" name="email" disabled value={user?.email || ""} className="input input-bordered w-full max-w-xs" />
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