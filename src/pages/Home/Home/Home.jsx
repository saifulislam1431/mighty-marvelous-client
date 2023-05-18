import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ExploreMore from '../ExploreMore/ExploreMore';
import CollectorShowcase from '../CollectorShowcase/CollectorShowcase';
import Contact from '../../Contact/Contact';

const Home = () => {
    return (
        <section>
            <Banner />
            <Gallery />
            <ExploreMore />
            <CollectorShowcase />
            <Contact />
        </section>
    );
};

export default Home;