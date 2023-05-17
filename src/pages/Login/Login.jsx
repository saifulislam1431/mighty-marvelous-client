import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';
import { userContext } from '../../Auth/Auth';
import logo from "../../assets/logo/logo2.png";


const Login = () => {
    const { signIn,
        googleIn,resetPass } = useContext(userContext);
    const [type, setType] = useState("password");
    const [IsShow, setIsShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();
    const from = location.state?.from?.pathname || '/'; 
   


    const handleShow = () => {
        setType("text")
    }

    const handleHide = () => {
        setType("password")
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signIn(email, password)
            .then(res => {
                const loggedUser = res.user;
                navigate(from , {replace:true});
                toast.success('Login Successful!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                form.reset();
                
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

    const handleGoogleLogin = () => {
        googleIn()
            .then(res => {
                const loggedUser = res.user;
                navigate(from , {replace:true});
                toast.success('Login Successful!', {
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
    const handleResetPass = ()=>{
        const email = emailRef.current.value;
        resetPass(email)
        .then(() => {
            toast.success('please Check Your Email!', {
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
    return (
        <section className='flex items-center justify-center my-10 lg:my-20'>
            <div className='flex flex-col'>
                <div className='mt-10 mb-5 text-center'>

                <Link to="/" className='inline-flex items-center'>
                    <img src={logo} alt="" className='w-14' />
                    <h1 className='brand-title text-xl'>Mighty Marvelous</h1>
                </Link>
                </div>
                <div className='text-center my-2'>
                    <h2 className='text-2xl font-medium tracking-wide text-secondary' style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>Login to your account</h2>
                </div>

                <form className='flex flex-col' onSubmit={handleLogin}>
                    <label className='text-neutral text-lg mt-2 mb-1'>Email:</label>
                    <input type="email"  name='email' placeholder="Enter email" ref={emailRef} className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required />

                    <label className='text-neutral text-lg mt-3 mb-1'>Password:</label>
                    <div className='inline-flex items-center'>
                        <input type={type} placeholder="Enter password" name='password' className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required />
                        <div className='relative right-8 cursor-pointer' onClick={() => setIsShow(!IsShow)}>
                            {
                                IsShow ? <FaEyeSlash className='h-5 w-5 text-warning' onClick={handleHide} /> : <FaEye className='h-5 w-5 text-warning' onClick={handleShow} />
                            }
                        </div>
                    </div>

                    <button className='myBtn my-5'>Login</button>
                </form>

                <span className='font-medium text-error underline cursor-pointer' onClick={handleResetPass}>Forgot password?</span>

                <p className='my-3 font-medium'>New user? <Link to="/register" className='cursor-pointer text-secondary underline'>Sign up</Link></p>
                <hr className='border border-primary' />
                <p className='text-center my-3 font-semibold'>Or login with:</p>
                <div className='text-center'>
                    <button className='flex items-center justify-center gap-4 w-full mb-3 border border-accent py-2 rounded-full font-medium hover:bg-accent hover:text-white' onClick={handleGoogleLogin}><FaGoogle /> Google</button>
                </div>
            </div>

        </section>
    );
};

export default Login;