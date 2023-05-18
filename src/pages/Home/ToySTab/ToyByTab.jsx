import React from 'react';
import { FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const ToyByTab = ({ tabToy }) => {
    const {_id,toyName, price, rating, photo } = tabToy;
    return (
        <section className='my-10'>
            <div className="card w-80 bg-base-100 shadow-xl" data-aos="fade-up">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Toy" className="rounded-xl h-72" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-secondary">{toyName}</h2>
                    <div>
                        <p className='font-medium'>Price: ${price}</p>
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
                    <Link to={`/toyDetails/${_id}`} className="card-actions">
                        <button className="mySecBtn">View Details</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ToyByTab;