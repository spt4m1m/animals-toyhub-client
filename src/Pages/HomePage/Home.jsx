import React from 'react';
import Banner from './Banner';
import Support from './Support';
import AboutUs from './AboutUs';
import ToyTab from './ToyTab';
import ToyCarousel from './ToyCarousel';
import Testimonial from './Testimonial';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Animals Toyhub | Home</title>
            </Helmet>
            <Banner />
            <Support />
            <AboutUs />
            <ToyCarousel />
            <ToyTab />
            <Testimonial />
        </div>
    );
};

export default Home;