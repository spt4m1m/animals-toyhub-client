import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToy from './MyToy';
import Loading from '../../Components/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [sortData, setSortData] = useState([]);
    const { isLoading, data: toys, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(`https://animals-toyhub-server.vercel.app/alltoys?email=${user.email}`).then(
                (res) => res.json(),
            ),
    })
    if (isLoading) {
        return <Loading />
    }
    const handleSelectSort = (e) => {
        const select = e.target.value;
        if (select == "Ascending") {
            fetch(`https://animals-toyhub-server.vercel.app/ascendingsort?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setSortData(data)
                    toast.success('Toys Ascending by Price')
                })

        }
        if (select == "Dscending") {
            fetch(`https://animals-toyhub-server.vercel.app/dscendingsort?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setSortData(data)
                    toast.success('Toys Dscending by Price')
                })
        }
    }
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <HelmetProvider>
            <div data-aos="zoom-in">
                <Helmet>
                    <title>Animals Toyhub | My Toys</title>
                </Helmet>
                <h1 className='text-center text-3xl'>{`You added ${toys.length} Toys`}</h1>
                {/* select for sort  */}
                <div className='mx-3'>
                    <select onChange={handleSelectSort} name='sortSelect' className="select select-primary w-full max-w-xs">
                        <option defaultValue>Sort Toy By Price</option>
                        <option value="Dscending">Dscending</option>
                        <option value="Ascending">Ascending</option>
                    </select>
                </div>

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
                                sortData.length > 0 ? sortData.map((toy, index) => <MyToy key={toy._id} toy={toy} index={index} refetch={refetch} />) : toys.slice(0, 20).map((toy, index) => <MyToy key={toy._id} toy={toy} index={index} refetch={refetch} />)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </HelmetProvider>
    );
};

export default MyToys;