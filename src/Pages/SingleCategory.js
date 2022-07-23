import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import PageHeader from '../Components/PageHeader'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseApiUrl, mediaUrl } from '../Config'

export default function SingleCategory() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [getCat, setGetCat] = useState([])
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchcat() {
            try {
                let res = await axios.get(`${baseApiUrl}category/${id}`)
                setGetCat(res.data.msg)
                if (res) {
                    let proRes = await axios.get(`${baseApiUrl}products/${id}`)
                    setProduct(proRes.data.msg)
                } else {
                    navigate('/')
                }
            } catch (err) {
                navigate('/')
            }
        }

        fetchcat()
    }, [])


    return (
        <>
            <PageHeader title={"Category"} name={getCat.name} />

            {/* contact */}

            <div className="container-fluid pt-5 pb-3">
                <div className="container">
                    <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">Our Products</h6>
                    <h1 className="display-4 text-center mb-5">What We Offer</h1>
                    <div className="row">
                        {
                            product.length == 0 ? (
                                <h1>No Product found ! Sorry for Unconvenience </h1>
                            ) : (
                                product.map((v, i) => {
                                    return (

                                        <div className="col-lg-3 col-md-6 pb-1" key={i}>
                                            <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{ "height": "300px" }}>
                                                <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{ "width": "100px", "height": "100px" }}>
                                                    <img src={`${mediaUrl}product/${v.picture}`} className='image-fluid justify-center' style={{ "height": "150px", "width": "180px" }} />
                                                </div>
                                                <Link to={`/product/${v._id}`} className="mt-5">
                                                    <h4 className="font-weight-bold m-0">{v.name}</h4>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })
                            )}
                    </div>
                </div>
            </div>

        </>
    )
}
