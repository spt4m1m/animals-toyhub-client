import React, { useContext } from 'react';
import ActiveRoute from '../ActiveRoute/ActiveRoute';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import './Navbar.css'
import { toast } from 'react-hot-toast';



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => toast.success('Logout Successfully'))
            .catch(error => toast.error(`${error.message}`))
    }

    const list = <>
        <li><ActiveRoute to='home'>Home</ActiveRoute></li>
        <li><ActiveRoute to='blogs'>Blogs</ActiveRoute></li>
        {
            user ? <>
                <li><ActiveRoute to='alltoys'>All Toys</ActiveRoute></li>
                <li><ActiveRoute to='mytoys'>My Toys</ActiveRoute></li>
                <li><ActiveRoute to='addtoy'>Add Toy</ActiveRoute></li>
                <li><button onClick={handleLogOut}>Log Out</button></li>
                <div className="w-12 rounded-full relative img">
                    <img className='shadow-md' src={user.photoURL} />
                    <p className='name absolute hidden top-16 left-[-10px] shadow-md p-2 rounded-md text-primary'>{user.displayName}</p>
                </div>
            </> : <>
                <li><ActiveRoute to='login'>Login</ActiveRoute></li>
                <li><ActiveRoute to='register'>Register</ActiveRoute></li>
            </>
        }


    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                            {list}
                        </ul>
                    </div>
                    <div className="w-24 rounded-full">
                        <img src='toyhublogo.png' />
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-2xl">Animals ToyHub</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {list}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;