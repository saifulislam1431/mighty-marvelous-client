import React from 'react';
import {Link} from "react-router-dom"

const ToyTable = ({allToy}) => {
    const{_id,quantity,sellerName,toyName,toySubCategory,price} = allToy
    return (
        <tr>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{toySubCategory}</td>
            <td>${price}</td>
            <td className='text-center'>{quantity}</td>
            <td><Link to={`/toyDetails/${_id}`} ><button className='myBtn'>View Details</button></Link></td>
        </tr>
    );
};

export default ToyTable;