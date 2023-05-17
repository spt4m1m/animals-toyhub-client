import React from 'react';
import ActiveRoute from '../ActiveRoute/ActiveRoute';

const list = <>
    <li><ActiveRoute to='home'>Home</ActiveRoute></li>
    <li><ActiveRoute to='alltoys'>All Toys</ActiveRoute></li>
    <li><ActiveRoute to='mytoys'>My Toys</ActiveRoute></li>
    <li><ActiveRoute to='addtoy'>Add Toy</ActiveRoute></li>
    <li><ActiveRoute to='login'>Login</ActiveRoute></li>
    <li><ActiveRoute to='register'>Register</ActiveRoute></li>
</>

const Navbar = () => {
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
                    <a className="btn btn-ghost normal-case text-2xl">Animals ToyHub</a>
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