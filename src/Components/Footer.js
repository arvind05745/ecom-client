import React, { useEffect } from 'react'
import {Link} from'react-router-dom'
import PageHeader from './PageHeader'
import UseTitle from './UseTitle'
export default function Footer() {
    
    
  return (
    <>
     <div className="container-fluid bg-primary text-white mt-5 pt-5 px-sm-3 px-md-5">
        <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
                <Link to=""><h1 className="text-secondary mb-3"><span className="text-white">A.K.</span>ELECTRONIC</h1></Link>
                <p>Electronic product company</p>
                <div className="d-flex justify-content-start mt-4">
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{"width": "38px", "height" :"38px"}} href="https://twitter.com/arvind05745"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{"width": "38px", "height" :"38px"}} href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{"width": "38px", "height" :"38px"}} href="https://www.linkedin.com/in/arvind-kumar-79739b22b/"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{"width": "38px", "height": "38px"}} href="https://www.instagram.com/arvindgupta05745/"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-white mb-4">Get In Touch</h4>
                <p>You can also reach us through these methods.</p>
                <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New Delhi, INDIA</p>
                <p><i className="fa fa-phone-alt mr-2"></i>+011 1234-5678</p>
                <p><i className="fa fa-envelope mr-2"></i>ak@123electronic.@gmailcom</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-white mb-4">Quick Links</h4>
                <div className="d-flex flex-column justify-content-start">
                    <Link className="text-white mb-2" to="/"><i className="fa fa-angle-right mr-2" ></i>Home</Link>
                    <Link className="text-white mb-2" to="/about"><i className="fa fa-angle-right mr-2" ></i>About Us</Link>
                    <Link className="text-white mb-2" to="/homecategory"><i className="fa fa-angle-right mr-2"></i>Category</Link>
                    <Link className="text-white mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Pricing</Link>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-white mb-4">Newsletter</h4>
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control border-0" placeholder="Your Name" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control border-0" placeholder="Your Email" required="required" />
                    </div>
                    <div>
                        <button className="btn btn-lg btn-secondary btn-block border-0" type="submit">Submit Now</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-white py-4 px-sm-3 px-md-5">
        <p className="m-0 text-center text-white">
            &copy; <Link className="text-white font-weight-medium" to="#">A.K.Electronic.com</Link>. All Rights Reserved. Designed by
            <Link className="text-white font-weight-medium" style={{"textDecoration":"underLine"}} to="/"> Arvind Kumar</Link>
        </p>
    </div>
    </>
  )
}
