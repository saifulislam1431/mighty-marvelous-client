import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../Auth/Auth';
import UserToyTable from '../ToyTable/UserToyTable';
import Loading from '../Loading/Loading';
import { useNavigation } from 'react-router-dom';

const MyToys = () => {
    const navigation = useNavigation();
    if(navigation.state === "loading"){
      return <Loading></Loading>
  }
    const{user} = useContext(userContext);
    const[toys , setToys]=useState([]);
    const url =`https://mighty-marvelous-server.vercel.app/userToy?email=${user.email}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json()).then(data=>setToys(data))
    },[user])
    return (
        <section className='my-10'>
            <div>
            <div className='text-center lg:px-20' data-aos="fade-up">
                    <h1 className='text-primary brand-title text-2xl'>My Heroic Toy Collections</h1>
                    <p className='my-5 font-medium'>Step into the extraordinary realm of my personal heroic toy collection.</p>
                </div>

                <div>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        Seller
                                    </th>
                                    <th>Toy Name</th>
                                    <th>Sub-category</th>
                                    <th>Price</th>
                                    <th>Available Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    toys.map(toy => <UserToyTable
                                        key={toy._id}
                                        toy={toy}
                                        toys={toys}
                                        setToys={setToys}
                                    ></UserToyTable>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyToys;