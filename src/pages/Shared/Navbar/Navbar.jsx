import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { userContext } from '../../../Auth/Auth';
import logo from "../../../assets/logo/logo2.png";
import { toast } from 'react-toastify';
import "./Navbar.css"
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
const Navbar = () => {
    const { user,logOUt } = useContext(userContext);
    const handleLogOut = ()=>{
        logOUt()
        .then(() => {

            toast.success('Log Out Successful!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            
        })
        .catch((error) => {
            toast.error(error.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        })
    }
    const navItems = <>
        <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "default")}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/allToys" className={({ isActive }) => (isActive ? "active" : "default")}>All Toys</NavLink>
        </li>
        {
            user ? <li>
                <NavLink to="/myToys" className={({ isActive }) => (isActive ? "active" : "default")}>My Toys</NavLink>
            </li> : ""
        }
        {user ? <li>
            <NavLink to="/addToys" className={({ isActive }) => (isActive ? "active" : "default")}>Add A Toy</NavLink>
        </li> : ""}
        <li>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "default")}>Blogs</NavLink>
        </li>

    </>
    return (
        <section className='sticky top-0'>
            <div className="navbar navBg sticky top-0">
            <div className='navbar-start inline-flex items-center lg:hidden'>
                        <img src={logo} alt="" className='w-14' />
                        <h1 className='brand-title text-xl'>Mighty Marvelous</h1>
                    </div>
                <div className="navbar-end lg:navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="#2D9B51"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0">
                            {navItems}

                            {
                                user ? <div className='inline-flex gap-2 items-center'>
                                <button className='myBtn mr-3 inline-flex items-center gap-2' onClick={handleLogOut}>Sign Out <FaSignOutAlt /></button>
                                <div className="w-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                                </div> : <Link to="/login"><button className='myBtn inline-flex items-center gap-1'>Sign In <FaSignInAlt /></button></Link>
                            }

                        </ul>
                    </div>
                    <div className='hidden lg:inline-flex items-center'>
                        <img src={logo} alt="" className='w-14' />
                        <h1 className='brand-title text-xl'>Mighty Marvelous</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    {
                        user ? <div className='inline-flex gap-2 items-center'>
                        <button className='myBtn mr-3 inline-flex items-center gap-2' onClick={handleLogOut}>Sign Out <FaSignOutAlt /></button>
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        </div> : <Link to="/login"><button className='myBtn inline-flex items-center gap-1'>Sign In <FaSignInAlt /></button></Link>
                    }
                </div>
                
            </div>
        </section>
    );
};

export default Navbar;