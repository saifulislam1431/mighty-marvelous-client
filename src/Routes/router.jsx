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
                element:<MyToys></MyToys>
            },
            {
                path:"allToys",
                element:<AllToys></AllToys>
            },
            {
                path:"addToys",
                element:<AddToy></AddToy>
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
            }
        ]
      },
]);

export default router;