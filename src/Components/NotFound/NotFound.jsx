import React from 'react';
import notfound from '../../assets/notfound.svg'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='mx-auto w-full text-center'>
            <img className='max-w-sm rounded-lg shadow-2xl mx-auto mt-32' src={notfound} alt="" />
            <Link to='/' className='btn btn-primary m-5 normal-case'>Go Home</Link>
        </div>
    );
};

export default NotFound;