import React,{ useEffect }  from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Main = () => {
    const loc = useLocation()
    useEffect(()=>{
      if(loc.pathname === '/'){
        document.title = "Mighty Marvelous | Home"
      }else{
        document.title = `Mighty Marvelous ${loc.pathname.replace("/" , "| ")}`
      }
    },[loc.pathname])
    return (
        <section>
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </section>
    );
};

export default Main;