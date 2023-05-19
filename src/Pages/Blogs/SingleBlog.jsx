import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SingleBlog = () => {
    const navigate = useNavigate();
    const [blog, setBlog] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => {
                const matchBlog = data.find(b => b._id == id);
                setBlog(matchBlog)
            })
    }, [id])

    const handleBack = () => {
        navigate('/blogs')
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <Helmet>
                <title>Animals Toyhub | Single Blog</title>
            </Helmet>
            <figure className="px-10 pt-10">
                <img src={blog.blogImg} alt="Shoes" className="rounded-xl md:w-[500px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">{blog.question}</h2>
                <p className='md:w-[800px]'>{blog.answer}</p>
                <div className="card-actions py-5">
                    <button onClick={handleBack} className="btn btn-primary normal-case">Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;