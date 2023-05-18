import React, { useContext } from 'react';
import { userContext } from '../../Auth/Auth';
import Swal from 'sweetalert2';

const AddToy = () => {
    const { user } = useContext(userContext)
    const handleAdd = e => {
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
        
        const newToy = {
            toyName, toySubCategory, sellerName, sellerEmail, price , quantity, rating, photo, details
        }
        console.log(newToy);

        fetch("http://localhost:5000/allToys",{
            method:"POST",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(newToy)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Added Successfully',
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
                    <h1 className='text-primary brand-title text-2xl text-center'>Add to Your Heroic Collection</h1>
                    <form className='w-full space-y-7 mt-16' onSubmit={handleAdd}>
                        {/* Toy Name & category  */}
                        <div className='md:flex gap-4'>
                            <div className='md:w-1/2'>

                                <input type="text"
                                    name='toyName'
                                    placeholder="Toy Name" className="w-full inputField" />
                            </div>
                            <div className='md:w-1/2'>

                                <input type="text"
                                    name='category'
                                    placeholder="Toy Category" className="w-full inputField" />
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
                                    placeholder="Toy Price" className="w-full inputField" />
                            </div>
                            <div className='md:w-1/2'>

                                <input type="text"
                                    name='rating'
                                    placeholder="Toy Rating" className="w-full inputField" />
                            </div>
                            <div className='md:w-1/2'>

                                <input type="text"
                                    name='quantity'
                                    placeholder="Available quantity" className="w-full inputField" />
                            </div>
                        </div>
                        {/* photo */}
                        <div className='mt-2'>
                            <div>
                                <input
                                    type='URL' name='photo' placeholder="Toy Photo" className="w-full inputField" />
                            </div>

                        </div>

                        {/* massage */}
                        <div className='mt-2'>
                            <div>
                                <textarea
                                    rows={8}
                                    name='details' placeholder="Toy Details" className="w-full inputField" />
                            </div>

                        </div>
                        <div className='text-center'>
                            <input className='mySecBtn w-full lg:w-1/2 my-5' type="submit" value="Add Toy" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddToy;