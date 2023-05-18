import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';

const UpdateToy = () => {
    const { id } = useParams();
    const [toy, setToy] = useState([]);
    const [load, setLoad] = useState(true);
    const [controller, setController] = useState(true)
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/alltoys/${id}`)
            .then(res => res.json())
            .then(data => {
                setToy(data)
                setLoad(false)
            })
    }, [controller])

    const handleUpdateToy = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const description = form.description.value;
        const price = parseInt(form.price.value);
        const availableQuantity = parseInt(form.availableQuantity.value);
        const ratings = parseInt(form.ratings.value);
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const toydata = {
            name,
            photoUrl,
            description,
            price,
            availableQuantity,
            ratings,
            sellerEmail,
            sellerName,
            category
        }
        fetch(`http://localhost:5000/updatetoy/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toydata)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Updated toy successfully');
                    setController(!controller)
                }
            })

        form.reset();
    }



    return (
        <div>
            {
                toy.map(toy => <form onSubmit={handleUpdateToy} key={toy._id} className='p-5'>
                    <div className="relative z-0 w-full mb-6 group">
                        <input defaultValue={toy.name} autoComplete='off' type="text" name="name" id="name" className="text-black block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 font-semibold appearance-none border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-none" placeholder=" " required />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name*</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input defaultValue={toy.photoUrl} autoComplete='off' type="text" name="photoUrl" id="photoUrl" className="text-black block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 font-semibold appearance-none border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="photoUrl" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo Url*</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input defaultValue={toy.description} autoComplete='off' type="text" name="description" id="description" className="text-black block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 font-semibold appearance-none border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="description" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description*</label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input defaultValue={toy.price} autoComplete='off' type="text" name="price" id="price" className="text-black block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 font-semibold appearance-none border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="price" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price*</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input defaultValue={toy.availableQuantity} autoComplete='off' type="text" name="availableQuantity" id="availableQuantity" className="text-black block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 font-semibold appearance-none border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="availableQuantity" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Available Quantity*</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input defaultValue={toy.ratings} autoComplete='off' type="text" name="ratings" id="ratings" className="text-black block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 font-semibold appearance-none border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="ratings" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ratings (Out of 10)*</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input disabled defaultValue={user.displayName} type="text" name="sellerName" id="sellerName" className="text-black block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 font-semibold appearance-none border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="Seller Name" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Seller Name*</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input disabled defaultValue={user.email} type="text" name="sellerEmail" id="sellerEmail" className="text-black block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 font-semibold appearance-none border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="sellerEmail" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Seller Email*</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <select name='category' className="select select-bordered w-full max-w-xs">
                                <option>Select Sub-Category</option>
                                <option>Fish</option>
                                <option>Bird</option>
                                <option>Cow Type (4Legs)</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Toy</button>
                    <Link to='/mytoys' type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-3">Back</Link>
                </form>)
            }
        </div>
    );
};

export default UpdateToy;