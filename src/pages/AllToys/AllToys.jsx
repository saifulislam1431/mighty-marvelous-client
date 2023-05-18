import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyTable from '../ToyTable/ToyTable';
const AllToys = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const[allToys , setAllToys] = useState([]);

    const { totalToys } = useLoaderData();
    const itemPerPage = 20;
    const totalPage = Math.ceil(totalToys / itemPerPage);
    const pageNumbers = [...Array(totalPage).keys()]
    
useEffect(()=>{
    fetch(`http://localhost:5000/allToys?page=${currentPage}&limit=${itemPerPage}`)
    .then(res=>res.json())
    .then(data=>setAllToys(data))
},[currentPage , itemPerPage])



    return (
        <section className='my-10'>
            <div>
                <div className='text-center lg:px-20' data-aos="fade-up">
                    <h1 className='text-primary brand-title text-2xl'>Toy Galaxy: Explore the Infinite Possibilities</h1>
                    <p className='my-5 font-medium'>Immerse yourself in a galaxy of toys, where the only limit is your imagination.</p>
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
    allToys.map(allToy=><ToyTable
    key={allToy._id}
    allToy={allToy}
    ></ToyTable>)
}
    </tbody>    
  </table>
</div>
</div>
<div className='my-6 text-center'>
    {
        pageNumbers.map(pageNumber=><button key={pageNumber} className={`border py-1 px-3 mr-2 rounded-md hover:bg-primary hover:text-white font-semibold my-5 ${currentPage === pageNumber ? 'selected' : " "}`} onClick={()=>setCurrentPage(pageNumber)}>{pageNumber}</button>)
    }
    </div>                
            </div>
        </section>
    );
};

export default AllToys;