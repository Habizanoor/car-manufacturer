import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const handleUpdateProfile = event =>{
        event.preventDefault();
        const education = event.target.education.value;
        const linkedIn = event.target.linkedIn.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;

        const profile ={
            education: education,
            linkedIn: linkedIn,
            displayName:user.displayName,
            email:user.email,
            address:address,
            phone: phone
        }
        // fetch('http://localhost:5000/review',{
        //     method:'POST',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body: JSON.stringify(profile)
        // })
        // .then(res => res.json())

        // .then(data => {
        //     toast('Profile Updated')
        //     console.log(data);
        // })

        console.log(education, linkedIn, address, phone);

    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div>
                <h4>Name: {user.displayName}</h4>
                <h4>email: {user.email}</h4>
                <h4>Education: Bsc in CSE</h4>
                <h4>LinkedIn: www.linkedin.com/in/habiza-nily</h4>
                <h4>Address: 21/c Puranlane Zindabazar, Sylhet, Bangladesh.</h4>
                <h4>Phone: 01726395632</h4>
            </div>
            <div>
                <form onSubmit={handleUpdateProfile} className='grid grid-cols-1 gap-2 justify-items-center mt-20' >
                    <input type="text" name='education' placeholder="Education" className="input input-bordered w-full max-w-xl" />
                    <input type="text" name='linkedIn' placeholder="LinkedIn " className="input input-bordered w-full max-w-xl" />
                    <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xl" />
                    <input type="number" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xl" />
                   
                    <input className='btn btn-outline' type="submit" value="Update Profile" />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;