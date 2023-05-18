import React, { useEffect, useState } from 'react';
import Toy from './Toy';

const AllToys = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-3xl'>All Toys</h1>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    toys.slice(0, 20).map(toy => <Toy toy={toy} key={toy._id} />)
                }
            </div>
        </div>
    );
};

export default AllToys;