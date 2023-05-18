import React, { useEffect, useState } from 'react';
import Toy from './Toy';
import Loading from '../../Components/Loading/Loading';
import { useQuery } from '@tanstack/react-query';

const AllToys = () => {
    const { isLoading, data: toys } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('http://localhost:5000/alltoys').then(
                (res) => res.json(),
            ),
    })
    if (isLoading) {
        return <Loading />
    }
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