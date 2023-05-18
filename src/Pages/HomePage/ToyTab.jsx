import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Toy from '../AllToysPage/Toy';

const ToyTab = () => {
    const [toys, setToys] = useState([]);
    const [category, setCategory] = useState('Horse')
    useEffect(() => {
        fetch(`http://localhost:5000/category?category=${category}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [category])
    return (
        <div className='py-10 max-w-[1200px] mx-auto'>
            <h1 className='text-4xl text-center mb-10'>Explore Toys By Categories</h1>
            <Tabs>
                <TabList className='text-center text-xl border font-semibold'>
                    <Tab onClick={() => setCategory('Horse')}>Horse Toys</Tab>
                    <Tab onClick={() => setCategory('Fish')}>Fish Toys</Tab>
                    <Tab onClick={() => setCategory('Bird')}>Bird Toys</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        {
                            [...toys].reverse().slice(0, 3).map(toy => <Toy toy={toy} key={toy._id} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        {
                            toys.slice(0, 3).map(toy => <Toy toy={toy} key={toy._id} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        {
                            toys.slice(0, 3).map(toy => <Toy toy={toy} key={toy._id} />)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ToyTab;