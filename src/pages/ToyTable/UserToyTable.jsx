import React, { useEffect } from 'react';
import { Link, useNavigation } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../Loading/Loading';

const UserToyTable = ({ toys, toy, setToys }) => {
    const navigation = useNavigation();
    if(navigation.state === "loading"){
      return <Loading></Loading>
  }
    const { _id, quantity, sellerName, toyName, toySubCategory, price } = toy

    // useEffect(()=>{
    //     fetch(`https://mighty-marvelous-server.vercel.app/allToys/${_id}`)
    // },[])
    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://mighty-marvelous-server.vercel.app/deleteToy/${id}`,{
                    method:"DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(singleToy=>singleToy._id !== id);
                            setToys(remaining);
                        }

                    })

            }



        })
    }

    return (
        <tr>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{toySubCategory}</td>
            <td>${price}</td>
            <td className='text-center'>{quantity}</td>
            <td><Link to={`/updateToy/${_id}`} ><button className='myBtn'>Edit</button></Link><button className='bg-error py-1 px-2 rounded-md text-white ml-3' onClick={() => handleDelete(_id)}>Delete</button></td>
        </tr>
    );
};

export default UserToyTable;