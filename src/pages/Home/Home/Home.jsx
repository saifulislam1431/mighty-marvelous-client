import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ExploreMore from '../ExploreMore/ExploreMore';
import CollectorShowcase from '../CollectorShowcase/CollectorShowcase';
import Contact from '../../Contact/Contact';
import ToysTab from '../ToySTab/ToysTab';

const Home = () => {
    return (
        <section>
            <Banner />
            <Gallery />
            <ToysTab />
            <ExploreMore />
            <CollectorShowcase />
            <Contact />
        </section>
    );
};

export default Home;