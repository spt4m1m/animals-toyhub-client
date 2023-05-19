import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {
    const { photoUrl, name, description, price, availableQuantity, ratings, category, sellerName, sellerEmail } = toy;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl m-3">
                <figure><img src={photoUrl} alt="toy photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p><strong>Price :</strong> {price}Tk.</p>
                    <p><strong>Available :</strong> {availableQuantity} Pcs.</p>
                    <p><strong>Ratings :</strong> {ratings}/10</p>
                    <p><strong>Category :</strong> {category}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/alltoys/${toy._id}`} className="btn btn-primary normal-case">View More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toy;