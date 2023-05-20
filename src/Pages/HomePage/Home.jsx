import React from 'react';
import Banner from './Banner';
import Support from './Support';
import AboutUs from './AboutUs';
import ToyTab from './ToyTab';
import ToyCarousel from './ToyCarousel';
import Testimonial from './Testimonial';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Contact from './Contact';

const Home = () => {
    return (
        <HelmetProvider>
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
                <Contact />
            </div>
        </HelmetProvider>
    );
};

export default Home;