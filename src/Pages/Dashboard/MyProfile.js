import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Profile from './Profile';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    if(user){

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

        // console.log(education, linkedIn, address, phone);

    
    // if (loading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <div>
                <h4>Name: {user.displayName}</h4>
                <h4>email: {user.email}</h4>
                <h4 >Education: BSc in CSE</h4>
                <h4>LinkedIn: www.linkedin.com/in/habiza-nily</h4>
                <h4>Address: 21/c Puranlane Zindabazar, Sylhet, Bangladesh.</h4>
                <h4>Phone: 01726395632</h4>
            </div>
            <Profile></Profile>

        </div>
    );
};

export default MyProfile;