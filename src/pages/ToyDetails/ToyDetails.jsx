import React from 'react';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const ToyDetails = () => {
    const toy = useLoaderData();
    // console.log(toy);
    const { details, photo, price, quantity, rating, sellerEmail, sellerName, toyName } = toy
    return (
        <section className='my-10 lg:px-10'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-5">
                    <img src={photo} className="w-5/6 lg:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{toyName}</h1>
                        <p className="py-6">{details}</p>
                        <div className='my-3 flex justify-between items-start flex-col lg:flex-row'>
                            <div>
                                <h1 className='text-2xl font-bold text-secondary'>Seller</h1>
                                <p className='font-medium mt-2'>Name: {sellerName}</p>
                                <p className='font-medium'>Email: {sellerEmail}</p>
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold text-secondary'>Product Info</h1>
                                <p className='font-medium mt-2'>Price: ${price}</p>
                                <p className='font-medium'>Available Quantity: {quantity}</p>
                                <div className='inline-flex items-center gap-1 mt-2'>
                                    <Rating
                                        readonly
                                        placeholderRating={rating}
                                        emptySymbol={<FaStar />}
                                        placeholderSymbol={<FaStar className='text-yellow-500' />}
                                        fullSymbol={<FaStar className='text-yellow-500' />}
                                    /> <p className='font-medium'>({rating})</p>
                                </div>
                            </div>
                        </div>
                        <button className="myBtn">Order Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToyDetails;