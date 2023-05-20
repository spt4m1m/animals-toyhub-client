import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Loading from '../../Components/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const AllToys = () => {
    const { isLoading, data: toys } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://animals-toyhub-server.vercel.app/alltoys').then(
                (res) => res.json(),
            ),
    })
    const [searchedToy, setSearchedToy] = useState([]);
    const [searchText, setSearchText] = useState('')
    if (isLoading) {
        return <Loading />
    }

    const handleSearch = e => {
        e.preventDefault()
        const searchInputValue = e.target.search.value
        const searchCategory = searchInputValue.charAt(0).toUpperCase() + searchInputValue.slice(1);
        setSearchText(searchCategory)
        const match = toys.filter(toy => toy.category == searchCategory);
        setSearchedToy(match);
        e.target.reset();
    }

    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Animals Toyhub | All Toys</title>
                </Helmet>
                <h1 className='text-center text-3xl'>All Toys</h1>
                {/* search bar  */}

                <div className="mb-3 w-[300px] mx-auto my-10">
                    <form onSubmit={handleSearch} className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <input
                            name='search'
                            type="search"
                            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-black focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-gray-400 dark:focus:border-primary font-mono font-semibold"
                            placeholder="Search Toy By Category"
                            aria-label="Search"
                            aria-describedby="button-addon1" />

                        {/* <!--Search button--> */}
                        <button
                            className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                            type="submit"
                            id="button-addon1"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                    </form>
                </div>
                {searchedToy.length > 0 ? <h1 className='text-xl text-center font-semibold'>Found <span className='text-primary'>{searchText}</span> {searchedToy.length} Toy</h1> : searchText && <h1 className='text-xl text-center font-semibold'>No <span className='text-primary'>{searchText}</span> Category Found</h1>}

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
                                searchedToy.length > 1 ? searchedToy.map((toy, index) => <tr key={toy._id}>
                                    <th>{index + 1}</th>
                                    <th><div className="w-10 rounded-full">
                                        <img src={toy.photoUrl} />
                                    </div></th>
                                    <td>{toy.name}</td>
                                    <td>{toy.category}</td>
                                    <td>{toy.price}Tk.</td>
                                    <td>{toy.availableQuantity} Pcs</td>
                                    <td>{toy.sellerName}</td>
                                    <td><Link to={`/alltoys/${toy._id}`} className='btn btn-link'>view more <span className='text-primary text-xl'><Icon icon="mdi:arrow-right-thin" /></span></Link></td>
                                </tr>) : toys.slice(0, 20).map((toy, index) => <tr key={toy._id}>
                                    <th>{index + 1}</th>
                                    <th><div className="w-10 rounded-full">
                                        <img src={toy.photoUrl} />
                                    </div></th>
                                    <td>{toy.name}</td>
                                    <td>{toy.category}</td>
                                    <td>{toy.price}Tk.</td>
                                    <td>{toy.availableQuantity} Pcs</td>
                                    <td>{toy.sellerName}</td>
                                    <td><Link to={`/alltoys/${toy._id}`} className='btn btn-link'>view more <span className='text-primary text-xl'><Icon icon="mdi:arrow-right-thin" /></span></Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default AllToys;