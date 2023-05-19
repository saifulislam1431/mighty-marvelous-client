import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/Loading/Loading';
import { userContext } from '../Auth/Auth';
import Swal from 'sweetalert2';


const PrivateRouter = ({children}) => {
    const{user,loading} = useContext(userContext);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    if(!user){
        Swal.fire({
            title: 'Alert!',
            text: "You have to log in first to view details",
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        return  <Navigate  to="/login" state={{from : location}} replace></Navigate>
    
    }
    
}

export default PrivateRouter;