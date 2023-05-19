import { Icon } from '@iconify/react';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyToy = ({ toy, refetch, index }) => {
    const { photoUrl, name, price, availableQuantity, category, sellerName, } = toy;

    const handleToyDelete = (id) => {
        fetch(`http://localhost:5000/alltoys/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.status == 'success') {
                    toast.success('Deleted A Toy')
                    refetch()
                }
            })
    }
    return (
        <tr>
            <th><span>{index + 1}</span></th>
            <th><div className="w-10 rounded-full">
                <img src={photoUrl} />
            </div></th>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}Tk.</td>
            <td>{availableQuantity} Pcs</td>
            <td>{sellerName}</td>
            <td><Link to={`/mytoy/updatetoy/${toy._id}`} className='btn btn-link'>Update <span className='text-primary text-xl'><Icon icon="mdi:arrow-right-thin" /></span></Link></td>
            <td><button onClick={() => handleToyDelete(toy._id)} to={`/alltoys/${toy._id}`} className='btn btn-link text-red-500'>Delete <span className='text-red-500 text-xl'><Icon icon="material-symbols:delete" /></span></button></td>
        </tr>
    );
};

export default MyToy;