import React from 'react';
import Lottie from "lottie-react";
import animationData from "../../assets/animation/98194-loading.json"

const Loading = () => {
    return (
        <section className='flex min-h-[calc(100vh-100px)] items-center justify-center'>
            <div className='w-96'>
                <Lottie animationData={animationData} loop={true} />
            </div>
        </section>
    );
};

export default Loading;