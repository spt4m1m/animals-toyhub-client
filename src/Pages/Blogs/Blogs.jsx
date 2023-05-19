import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>Animals Toyhub | Blogs</title>
            </Helmet>
            <h1 className='text-center text-3xl'>Blogs About Web Development</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 px-10'>
                {
                    blogs.map(blog => <Blog key={blog._id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blogs;