import React from 'react';
import { toast } from 'react-toastify';

const Users = ({ user, index, refetch }) => {
    const {email, role} = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            refetch();
            toast.success('New Admin Created');
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !=='admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button className="btn btn-xs">Remove user</button></td>
        </tr>
    );
};

export default Users;