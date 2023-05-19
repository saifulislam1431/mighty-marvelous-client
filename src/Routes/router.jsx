import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../pages/Home/Home/Home';
import MyToys from '../pages/MyToys/MyToys';
import AllToys from '../pages/AllToys/AllToys';
import Blogs from '../pages/Blogs/Blogs';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import AddToy from '../pages/AddToy/AddToy';
import ErrorPage from '../pages/Error/ErrorPage';
import PrivateRouter from './PrivateRouter';
import ToyDetails from '../pages/ToyDetails/ToyDetails';
import UpdateToys from '../pages/UpdateToys/UpdateToys';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"myToys",
                element:<PrivateRouter><MyToys></MyToys></PrivateRouter>
            },
            {
                path:"allToys",
                element:<AllToys></AllToys>,
                loader:()=>fetch("https://mighty-marvelous-server.vercel.app/totalToys")
            },
            {
                path:"addToys",
                element:<PrivateRouter><AddToy></AddToy></PrivateRouter>
            },
            {
                path:"blog",
                element:<Blogs></Blogs>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            },
            {
                path:"/toyDetails/:id",
                element:<PrivateRouter><ToyDetails></ToyDetails></PrivateRouter>,
                loader:({params})=>fetch(`https://mighty-marvelous-server.vercel.app/allToys/${params.id}`)
            },
            {
                path:"/updateToy/:id",
                element:<PrivateRouter><UpdateToys></UpdateToys></PrivateRouter>,
                loader:({params})=>fetch(`https://mighty-marvelous-server.vercel.app/userToy/${params.id}`)
            }
        ]
      },
]);

export default router;