import React from 'react';

const AgeToys = () => {
    return (
        <div className='py-10'>
            <h2 className='text-3xl text-center font-semibold'>Shop Toys by Age</h2>
            <div className='grid grid-cols-1 md:grid-cols-6'>
                <div className='bg-red-500 w-52 h-52 text-center m-5 text-white text-2xl font-bold rounded-full mx-auto cursor-pointer hover:scale-110 transition ease-in delay-150'>
                    <p className='mt-16'>0-18</p>
                    <p>Months</p>
                </div>
                <div className='bg-green-500 w-52 h-52 text-center m-5 text-white text-2xl font-bold rounded-full mx-auto cursor-pointer hover:scale-110 transition ease-in delay-150'>
                    <p className='mt-16'>18-36</p>
                    <p>Months</p>
                </div>
                <div className='bg-yellow-500 w-52 h-52 text-center m-5 text-white text-2xl font-bold rounded-full mx-auto cursor-pointer hover:scale-110 transition ease-in delay-150'>
                    <p className='mt-16'>3-5</p>
                    <p>Years</p>
                </div>
                <div className='bg-blue-500 w-52 h-52 text-center m-5 text-white text-2xl font-bold rounded-full mx-auto cursor-pointer hover:scale-110 transition ease-in delay-150'>
                    <p className='mt-16'>6-8</p>
                    <p>Years</p>
                </div>
                <div className='bg-fuchsia-500 w-52 h-52 text-center m-5 text-white text-2xl font-bold rounded-full mx-auto cursor-pointer hover:scale-110 transition ease-in delay-150'>
                    <p className='mt-16'>9-11</p>
                    <p>Years</p>
                </div>
                <div className='bg-purple-500 w-52 h-52 text-center m-5 text-white text-2xl font-bold rounded-full mx-auto cursor-pointer hover:scale-110 transition ease-in delay-150'>
                    <p className='mt-16'>Big kid</p>
                    <p>(12+)</p>
                </div>
            </div>
        </div>
    );
};

export default AgeToys;