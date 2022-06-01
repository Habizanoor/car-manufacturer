import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const Profile = () => {
    const [user, loading] = useAuthState(auth);
    const handleUpdateProfile = event => {
        event.preventDefault();
        const education = event.target.education.value;
        const linkedIn = event.target.linkedIn.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;

        const myProfile = {
            education: education,
            linkedIn: linkedIn,
            displayName: user.displayName,
            email: user.email,
            address: address,
            phone: phone
        }
        fetch('https://aqueous-reef-16634.herokuapp.com/profile',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(myProfile)
        })
        .then(res => res.json())
        .then(data => {
            toast('Profile Updated')
            console.log(data);
        })

        console.log(education, linkedIn, address, phone);

    }
    if (loading) {
        return <Loading></Loading>
    }
    return (

        <div>
            <form onSubmit={handleUpdateProfile} className='grid grid-cols-1 gap-2 justify-items-center mt-20' >
                <input type="text" name='education' placeholder="Education" className="input input-bordered w-full max-w-xl" />
                <input type="text" name='linkedIn' placeholder="LinkedIn " className="input input-bordered w-full max-w-xl" />
                <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xl" />
                <input type="number" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xl" />

                <input className='btn btn-outline' type="submit" value="Update Profile" />
            </form>
        </div>
    );
};

export default Profile;