import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Loading from '../pages/Loading/Loading';
const Main = () => {
    return (
        <section>
            <Navbar />
            <Outlet />
            <Footer />
        </section>
    );
};

export default Main;