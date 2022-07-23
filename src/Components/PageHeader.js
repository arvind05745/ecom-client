import React from 'react'
import { Link } from 'react-router-dom'

export default function PageHeader({title,name}) {
  return (
    <>
    <div className="page-header container-fluid bg-secondary pt-2 pt-lg-5 pb-2 mb-5">
        <div className="container py-5">
            <div className="row align-items-center py-4">
                <div className="col-md-6 text-center text-md-left">
                    <h1 className="mb-4 mb-md-0 text-white">{name}</h1>
                </div>
                <div className="col-md-6 text-center text-md-right">
                    <div className="d-inline-flex align-items-center">
                        <Link className="btn text-white" to="/">Home</Link>
                        <i className="fas fa-angle-right text-white"></i>
                        <Link className="btn text-white disabled" to="#">{title}</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
