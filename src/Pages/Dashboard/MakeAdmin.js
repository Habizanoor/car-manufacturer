import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Users from './Users';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Options</th>
                        <th></th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user ,index) => <Users
                        key={user._id}
                        user={user}
                        index={index}
                        refetch={refetch}
                        ></Users>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;