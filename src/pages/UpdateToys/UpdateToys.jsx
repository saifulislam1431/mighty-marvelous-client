import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import {Link} from "react-router-dom";
import { userContext } from '../../Auth/Auth';
import Swal from 'sweetalert2';

const UpdateToys = () => {
    const toy = useLoaderData();
    const { user } = useContext(userContext);
    const{toyName, toySubCategory, sellerName, sellerEmail, price , quantity, rating, photo, details,_id} = toy
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const toyName = form.toyName.value;
        const toySubCategory = form.category.value;
        const sellerName = form.userName.value;
        const sellerEmail = form.email.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const details = form.details.value;
        
        const UpdateToy = {
            toyName, toySubCategory, sellerName, sellerEmail, price , quantity, rating, photo, details
        }
        // console.log(newToy);

        fetch(`https://mighty-marvelous-server.vercel.app/updateToy/${_id}`,{
            method:"PUT",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(UpdateToy)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Update Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <section className='lg:flex items-center justify-center my-14'>
            <div>

                <div>
                    <h1 className='text-primary brand-title text-2xl text-center'>Update to Your Heroic Collection</h1>
                    <form className='w-full space-y-7 mt-16' onSubmit={handleUpdate}>
                        {/* Toy Name & category  */}
                        <div className='md:flex gap-4'>
                            <div className='md:w-1/2'>

                                <input type="text"
                                    name='toyName'
                                    placeholder="Toy Name" defaultValue={toyName} className="w-full inputField" />
                            </div>
                            <div className='md:w-1/2'>

                                <input type="text"
                                    name='category'
                                    placeholder="Toy Category" defaultValue={toySubCategory} className="w-full inputField" />
                            </div>
                        </div>
                        {/* name & email */}
                        <div className='md:flex gap-4 mt-2'>
                            <div className='md:w-1/2'>

                                <input type="text"
                                    name='userName'
                                    defaultValue={user.displayName}
                                    placeholder="Your Name" className="w-full inputField" />
                            </div>
                            <div className='md:w-1/2'>

                                <input type="text"
                                    name='email'
                                    defaultValue={user.email}
                                    placeholder="Your email" className="w-full inputField" />
                            </div>
                        </div>

                        {/* Price & Quantity & rating */}
                        <div className='md:flex gap-4 mt-2'>
                            <div className='md:w-1/2'>

                                <input type="text"
                                    name='price'
                                    placeholder="Toy Price" defaultValue={price} className="w-full inputField" />
                            </div>
                            <div className='md:w-1/2'>

                                <input type="text"
                                    name='rating'
                                    placeholder="Toy Rating" defaultValue={rating} className="w-full inputField" />
                            </div>
                            <div className='md:w-1/2'>

                                <input type="text"
                                    name='quantity'
                                    placeholder="Available quantity" defaultValue={quantity} className="w-full inputField" />
                            </div>
                        </div>
                        {/* photo */}
                        <div className='mt-2'>
                            <div>
                                <input
                                    type='URL' name='photo' defaultValue={photo} placeholder="Toy Photo" className="w-full inputField" />
                            </div>

                        </div>

                        {/* massage */}
                        <div className='mt-2'>
                            <div>
                                <textarea
                                    rows={8}
                                    name='details' placeholder="Toy Details" defaultValue={details} className="w-full inputField" />
                            </div>

                        </div>
                        <div className='text-center'>
                            <input className='mySecBtn w-full lg:w-1/2 my-5' type="submit" value="Update Toy" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UpdateToys;