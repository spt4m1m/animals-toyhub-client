import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToy from './MyToy';
import Loading from '../../Components/Loading/Loading';
import { useQuery } from '@tanstack/react-query';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const { isLoading, data: toys, refetch } = useQuery({
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

            <div className="overflow-x-auto my-10">
                <table className="table table-compact w-full">
                    <thead>
                        <tr className='text-center'>
                            <th></th>
                            <th>img</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Seller</th>
                            <th>Acton</th>
                            <th>Acton</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            toys.slice(0, 20).map((toy, index) => <MyToy key={toy._id} toy={toy} index={index} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;