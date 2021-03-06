import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);
    // console.log(admin.admin);
    if (loading) {
        return (
            <div>loading.....</div>
        )
    }
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">

                <h2 className='text-3xl text-center font-bold text-zinc-500'>Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

                    {
                        !admin.admin && <>
                            <li><Link to='/dashboard'>My Orders</Link></li>
                            <li><Link to='/dashboard/review'>Add review</Link></li>
                        </>
                    }

                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    {
                        admin.admin && <>
                            <li><Link to='/dashboard/manageAllOrders'>Manage All Orders</Link></li>
                            <li><Link to='/dashboard/addAProduct'>Add A Product</Link></li>
                            <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                            <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;