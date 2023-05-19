import React,{ useEffect }  from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../pages/Loading/Loading';
const Main = () => {
    const loc = useLocation()
    const navigation = useNavigation();
    if(navigation.state === "loading"){
      return <Loading></Loading>
  }
    useEffect(()=>{
      if(loc.pathname === '/'){
        document.title = "Mighty Marvelous | Home"
      }else{
        document.title = `Mighty Marvelous ${loc.pathname.replace("/" , "| ")}`
      }
    },[loc.pathname])

    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
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