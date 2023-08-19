import React,{useEffect,useState} from 'react'
import './App.css'
import { useNavigate } from "react-router-dom";

import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'

import Home from './Pages/HomePage/Home'
import Contactus from './Pages/ContactUs/Contactus';
import Listings from './Pages/Listings/Listings'
import Listing from './Pages/Listing/Listing'
import Buyers from './Pages/Buyers/Buyers';
import Sellers from './Pages/Sellers/Sellers';
import NotFound from './Pages/NotFound/NotFound';


const Layout =()=>{

  return <>
    <Navbar/>
    <Outlet/>
  </>
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/listings',
        element:<Listings/>
      },
      {
        path:'/listing/:id',
        element:<Listing/>
      },
      {
        path:'/contact-us',
        element:<Contactus/>
      },
      {
        path:"/buy",
        element:<Buyers/>
      },
      {
        path:'/sell',
        element:<Sellers/>
      },
    ]
  },
  {
    path:'*',
    element:<NotFound/>
  }
]);

function App() {
 
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
