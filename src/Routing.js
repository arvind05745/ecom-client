import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Address from './Components/Address'
import Footer from './Components/Footer'
import HomeCategory from './Components/HomeCategory'
import Product from './Components/Product'
import Topbar from './Components/Topbar'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SingleCategory from './Pages/SingleCategory'

export default function Routing() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Topbar' element={<Topbar/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/homecategory' element={<HomeCategory/>}/>
        <Route path='/singlecategory/:id' element={<SingleCategory/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/address' element={<Address/>}/>
    </Routes>
    </>
  )
}
