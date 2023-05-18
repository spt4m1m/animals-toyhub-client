import React from 'react';
import Banner from './Banner';
import Support from './Support';
import AboutUs from './AboutUs';
import ToyTab from './ToyTab';
import ToyCarousel from './ToyCarousel';

const Home = () => {
    return (
        <div>
            <Banner />
            <Support />
            <AboutUs />
            <ToyCarousel />
            <ToyTab />
        </div>
    );
};

export default Home;