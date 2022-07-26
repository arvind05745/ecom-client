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
                        <a className="text-white px-3" href="https://www.facebook.com/">
                            <i className="fab fa-facebook-f"/>
                        </a>
                        <a className="text-white px-3" href="https://twitter.com/arvind05745">
                            <i className="fab fa-twitter"/>
                        </a>
                        <a className="text-white px-3" href="https://www.linkedin.com/in/arvind-kumar-79739b22b/">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a className="text-white px-3" href="https://www.instagram.com/arvindgupta05745/">
                            <i className="fab fa-instagram"/>
                        </a>
                        <a className="text-white pl-3" href="http://www.youtube.com">
                            <i className="fab fa-youtube"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
