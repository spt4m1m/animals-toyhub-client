import React, { useEffect } from 'react';
import aboutimg from '../../assets/childrenplayingwithtoy.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div>
            <div className="hero min-h-[70vh] py-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img data-aos-duration="2000" data-aos="fade-right" src={aboutimg} className="max-w-xsm md:max-w-2xl rounded-lg shadow-2xl" />
                    <div data-aos-duration="2000" data-aos="fade-left" className='md:ms-10'>
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="py-6">
                            Introducing Animals ToyHub, the ultimate online destination for all your toy-buying needs! As a leading toy-selling website, we offer an extensive collection of toys that will ignite the imagination and bring joy to children of all ages.

                            At Animals ToyHub, we understand the importance of play in a child's development. That's why we carefully curate our product selection to encompass a wide range of toys that cater to various interests, learning styles, and age groups. From classic toys that have stood the test of time to the latest trends and innovations, we have something to suit every child's preferences.</p>
                        <button className="btn btn-primary normal-case">know more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;