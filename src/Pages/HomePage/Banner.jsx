import React from 'react';
import bannerimg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${bannerimg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Pick Up Best Toys For Your Baby</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary normal-case">Explore Toys</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;