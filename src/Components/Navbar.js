
import Topbar from './Topbar'
import { Link, useNavigate } from 'react-router-dom'
import {useState } from 'react'

export default function Navbar() {

    const [pro,setPro]=useState()
    const navigate=useNavigate()
    
    let cart=localStorage.getItem('cart')
    let cartArr=JSON.parse(cart)
    let nop=0
    if(cartArr){
        let length=cartArr.length
         nop=length
         }

         const loginUserEmail=localStorage.getItem('frontUser')

         function logout(){
            localStorage.removeItem("frontUser")
            navigate('/login')
         }

  return (
    <>
    <Topbar/>
    <div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg position-relative p-0 px-lg-3" style={{"zIndex": 9}}>
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 pl-3 pl-lg-5">
                <Link to="" className="navbar-brand">
                    <h1 className="m-0 text-secondary"><span className="text-primary">A.K.</span> ELECTRONIC</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/homecategory" className="nav-item nav-link">Category</Link>
                        <Link to="" className="nav-item nav-link">Contact</Link>
                        <Link to='/cart' className="nav-item nav-link">Cart <sup className='badge badge-danger' style={{"borderRadius":"25%"}}>{nop}</sup></Link>
                        {
                            loginUserEmail?(
                            <a className='nav-item nav-link' onClick={logout}> Logout</a>
                            ):(
                                <Link to="/login" className='nav-item nav-link'> Login</Link>
                            )
                        }
                    </div>
                </div>
            </nav>
        </div>
    </div>
    </>
  )
}
