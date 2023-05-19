import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import ToyTable from '../ToyTable/ToyTable';
import Swal from 'sweetalert2';
import Loading from '../Loading/Loading';
const AllToys = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [allToys, setAllToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [sortValue, setSortValue] = useState(1);

    const { totalToys } = useLoaderData();
    const itemPerPage = 20;
    const totalPage = Math.ceil(totalToys / itemPerPage);
    const pageNumbers = [...Array(totalPage).keys()]

    const navigation = useNavigation();
    if(navigation.state === "loading"){
      return <Loading></Loading>
  }

    useEffect(() => {
        fetch(`https://mighty-marvelous-server.vercel.app/allToys?page=${currentPage}&limit=${itemPerPage}&sort=${sortValue}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [currentPage, itemPerPage, sortValue])

    const handleSearch = () => {
        // console.log(searchText)
        fetch(`https://mighty-marvelous-server.vercel.app/toyByName/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })

    }

    return (
        <section className='my-10'>
            <div>
                <div className='text-center lg:px-20' data-aos="fade-up">
                    <h1 className='text-primary brand-title text-2xl'>Toy Galaxy: Explore the Infinite Possibilities</h1>
                    <p className='my-5 font-medium'>Immerse yourself in a galaxy of toys, where the only limit is your imagination.</p>
                </div>

                <div className='text-center my-5'>

                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text" name="" placeholder='Search a toy..' className='inputField' />
                    <button onClick={handleSearch} className='px-4 py-2 bg-primary text-white rounded-md ml-4' >Search</button>

                </div>
                <div className='text-center my-5'>
                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="mySecBtn m-1">Sort By:</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className={`tab ${sortValue == 1 ? "selected" : ""} `} onClick={() => setSortValue(1)}>Low Price</li>
                            <li className={`tab ${sortValue == -1 ? "selected" : ""} `} onClick={() => setSortValue(-1)}>High Price</li>
                        </ul>
                    </div>
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
                                    allToys.map(allToy => <ToyTable
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
                        pageNumbers.map(pageNumber => <button key={pageNumber} className={`border py-1 px-3 mr-2 rounded-md hover:bg-primary hover:text-white font-semibold my-5 ${currentPage === pageNumber ? 'selected' : " "}`} onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</button>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AllToys;