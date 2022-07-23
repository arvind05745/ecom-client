import React from 'react'


export default function Slider() {
  return (
    <>
    <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="assets/img/original_200219061202_5e4cd1b2c5eb3.jpg" style={{"height":"900px"}} alt="Image"/>
                    {/* Users\DELL\Desktop\project\frontend\public\assets\img */}
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{"maxWidth": "900px"}}>
                            <h4 className="text-white text-uppercase mb-md-3">A.K. Electronic</h4>
                            <h1 className="display-3 text-white mb-md-4">Good and Genuine Products</h1>
                            <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="assets/img/Important-Tips-to-Buy-Electronic-Products.jpg" style={{"height":"900px"}} alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{"maxWidth": "900px"}}>
                            <h4 className="text-white text-uppercase mb-md-3">A.K. Electronic</h4>
                            <h1 className="display-3 text-white mb-md-4">High Quality original Products</h1>
                            <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div className="btn btn-secondary" style={{"width": "45px", "height": "45px"}}>
                    <span className="carousel-control-prev-icon mb-n2"></span>
                </div>
            </a>
            <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                <div className="btn btn-secondary" style={{"width": "45px", "height": "45px"}}>
                    <span className="carousel-control-next-icon mb-n2"></span>
                </div>
            </a>
        </div>
    </div>
    <div className="container-fluid contact-info mt-5 mb-4">
        <div className="container" style={{"padding": "0 30px"}}>
            <div className="row">
                <div className="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0" style={{"height": "100px"}}>
                    <div className="d-inline-flex">
                        <i className="fa fa-2x fa-map-marker-alt text-white m-0 mr-3"></i>
                        <div className="d-flex flex-column">
                            <h5 className="text-white font-weight-medium">Our Location</h5>
                            <p className="m-0 text-white">123 Street, New Delhi, INDIA</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center bg-primary mb-4 mb-lg-0" style={{"height": "100px"}}>
                    <div className="d-inline-flex text-left">
                        <i className="fa fa-2x fa-envelope text-white m-0 mr-3"></i>
                        <div className="d-flex flex-column">
                            <h5 className="text-white font-weight-medium">Email Us</h5>
                            <p className="m-0 text-white">ak@123electronic.@gmailcom</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0" style={{"height": "100px"}}>
                    <div className="d-inline-flex text-left">
                        <i className="fa fa-2x fa-phone-alt text-white m-0 mr-3"></i>
                        <div className="d-flex flex-column">
                            <h5 className="text-white font-weight-medium">Call Us</h5>
                            <p className="m-0 text-white">+011 1234 5678</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
