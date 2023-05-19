import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SingleToy = () => {
    const { id } = useParams();
    const { isLoading, data: toy } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(`http://localhost:5000/alltoys/${id}`).then(
                (res) => res.json(),
            ),
    })
    if (isLoading) {
        return <Loading />
    }

    const { photoUrl, name, description, price, availableQuantity, ratings, category, sellerName, sellerEmail } = toy[0];
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Animals Toyhub | Toy Details</title>
                </Helmet>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={photoUrl} alt="toy picture" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{name}</h2>
                        <p><strong>Desc :</strong> {description}</p>
                        <p><strong>Price :</strong> {price}Tk.</p>
                        <p><strong>Available :</strong> {availableQuantity} Pcs.</p>
                        <p><strong>Ratings :</strong> {ratings}/10</p>
                        <p><strong>Category :</strong> {category}</p>
                        <p><strong>Seller Name :</strong> {sellerName}</p>
                        <p><strong>Seller Email :</strong> {sellerEmail}</p>
                        <div className="card-actions justify-end">
                            <Link to='/alltoys' className="btn btn-primary">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default SingleToy;