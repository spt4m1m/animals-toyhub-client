import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = ({ blog }) => {
    const navigate = useNavigate()
    const handleReadMore = (id) => {
        navigate(`/blog/${id}`)
    }
    return (
        <div>
            <div className="card mx-10 bg-base-100 shadow-xl my-3">
                <figure className="">
                    <img src={blog.blogImg} alt="blog_img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{blog.question}</h2>
                    <p>{blog.answer.length < 30 ? blog.answer : blog.answer.slice(0, 100)} ......<button onClick={() => handleReadMore(blog._id)} className='text-primary btn-link'>Read More</button></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;