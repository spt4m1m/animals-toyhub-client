import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToy from './MyToy';
import Loading from '../../Components/Loading/Loading';
import { useQuery } from '@tanstack/react-query';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const { isLoading, data: toys } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(`http://localhost:5000/alltoys?email=${user.email}`).then(
                (res) => res.json(),
            ),
    })
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1 className='text-center text-3xl'>{`You added ${toys.length} Toys`}</h1>

            <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    toys.map(toy => <MyToy toy={toy} key={toy._id} />)
                }
            </div>

        </div>
    );
};

export default MyToys;