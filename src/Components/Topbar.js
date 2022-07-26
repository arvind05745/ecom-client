import React from 'react'
import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <>
     <div className="container-fluid bg-primary py-3">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <Link className="text-white pr-3" to="">FAQs</Link>
                        <span className="text-white">|</span>
                        <Link className="text-white px-3" to="">Help</Link>
                        <span className="text-white">|</span>
                        <Link className="text-white pl-3" to="">Support</Link>
                    </div>
                </div>
                <div className="col-md-6 text-center text-lg-right">
                    <div className="d-inline-flex align-items-center">
                        <Link className="text-white px-3" to="www.facebook.com">
                            <i className="fab fa-facebook-f"/>
                        </Link>
                        <Link className="text-white px-3" to="">
                            <i className="fab fa-twitter"/>
                        </Link>
                        <Link className="text-white px-3" to="">
                            <i className="fab fa-linkedin-in"/>
                        </Link>
                        <Link className="text-white px-3" to="">
                            <i className="fab fa-instagram"/>
                        </Link>
                        <Link className="text-white pl-3" to="">
                            <i className="fab fa-youtube"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
