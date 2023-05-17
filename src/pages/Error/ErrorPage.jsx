import React from 'react';
import Lottie from "lottie-react";
import animationData from "../../assets/animation/92157-404-animation.json";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <section className='flex items-center justify-center min-h-[calc(100vh-150px)]'>
            <div>
               <div className='lg:w-96'>
               <Lottie animationData={animationData} loop={true} />
               </div>

               <Link to="/">
                <div className='text-center mt-5'>
                <button className='myBtn inline-flex items-center gap-1'><FaArrowLeft /> Back to home</button>
                </div>
               </Link>
            </div>
        </section>
    );
};

export default ErrorPage;