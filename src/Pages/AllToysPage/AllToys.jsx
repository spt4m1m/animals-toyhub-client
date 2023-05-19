import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Loading from '../../Components/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

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
            <div className="overflow-x-auto my-10">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>img</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Seller</th>
                            <th>More info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.slice(0, 20).map((toy, index) => <tr>
                                <th>{index + 1}</th>
                                <th><div className="w-10 rounded-full">
                                    <img src={toy.photoUrl} />
                                </div></th>
                                <td>{toy.name}</td>
                                <td>{toy.category}</td>
                                <td>{toy.price}Tk.</td>
                                <td>{toy.availableQuantity} Pcs</td>
                                <td>{toy.sellerName}</td>
                                <Link to={`/alltoys/${toy._id}`} className='btn btn-link'>view more <span className='text-primary text-xl'><Icon icon="mdi:arrow-right-thin" /></span></Link>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;