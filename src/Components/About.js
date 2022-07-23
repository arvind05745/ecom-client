import React, { useEffect } from 'react'
import PageHeader from './PageHeader'
import UseTitle from './UseTitle'

export default function About() {
    UseTitle("About us")

    return (
        <>
            <PageHeader title={"About us"} />
            <div className="container-fluid py-5">
                <div className="container pt-0 pt-lg-4">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img className="img-fluid" src="assets/img/delivery-man-463x600.png" alt="" />
                        </div>
                        <div className="col-lg-7 mt-5 mt-lg-0 pl-lg-5">
                            <h6 className="text-secondary text-uppercase font-weight-medium mb-3">Learn About Us</h6>
                            <h1 className="mb-4">We Are Best Quality Product Provider In Your City</h1>
                            <h5 className="font-weight-medium font-italic mb-4">We are providing smile on your face and Best quality product form last 10 Years.</h5>
                            <p className="mb-2">City's No. 1 Electronic E-commerce company with thousand of customer who have believe on our genuine products. we deliver products within 3 days of booking. </p>
                            <div className="row">
                                <div className="col-sm-6 pt-3">
                                    <div className="d-flex align-items-center">
                                        <i className="fa fa-check text-primary mr-2"></i>
                                        <p className="text-secondary font-weight-medium m-0">Quality Product Service</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 pt-3">
                                    <div className="d-flex align-items-center">
                                        <i className="fa fa-check text-primary mr-2"></i>
                                        <p className="text-secondary font-weight-medium m-0">100% Original Product</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 pt-3">
                                    <div className="d-flex align-items-center">
                                        <i className="fa fa-check text-primary mr-2"></i>
                                        <p className="text-secondary font-weight-medium m-0">Product With Warrenty</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 pt-3">
                                    <div className="d-flex align-items-center">
                                        <i className="fa fa-check text-primary mr-2"></i>
                                        <p className="text-secondary font-weight-medium m-0">Express Fast Delivery</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
