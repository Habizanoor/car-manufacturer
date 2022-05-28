import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddReview = () => {
    const [user, loading] = useAuthState(auth);
    const handleReview = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const userReview = event.target.userReview.value;
        const rating2 = event.target.rating2.value;

        const review ={
            userReview: userReview,
            buyer: user.email,
            buyerName:user.displayName,
            rating:rating2
        }
        fetch('http://localhost:5000/review',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())

        .then(data => {
            toast('Review Added')
            console.log(data);
        })

        console.log(name, email, userReview, rating2);

    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-10">
            <div className="card-body">
                <form onSubmit={handleReview} className='grid grid-cols-1 gap-2 justify-items-center mt-2' >
                    <input type="text" name='name' disabled value={user.displayName} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user.email} className="input input-bordered w-full max-w-xs" />
                    <textarea name="userReview" className="textarea w-full max-w-xs textarea-bordered" placeholder="Your Review......"></textarea>
                    <div className="rating">
                        <input type="radio" name="rating2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <input className='btn btn-outline' type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    )
};

export default AddReview;