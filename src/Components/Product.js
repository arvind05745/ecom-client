import { useState, useEffect } from 'react'
import PageHeader from './PageHeader'
import { useNavigate, useParams } from 'react-router-dom'
import { baseApiUrl, mediaUrl } from '../Config'
import axios from 'axios'
export default function Product() {
    const { id } = useParams()
    const [pro, setPro] = useState([])
    let [quantity, setQuantity] = useState(1)
    const navigate = useNavigate()

    useEffect(() => {
        async function getPro() {
            let res = await axios.get(`${baseApiUrl}product/${id}`)
            setPro(res.data.msg)

        }
        getPro()
    }, [])


    function addToCart() {
        let cart = localStorage.getItem('cart')
        let myCart = { quantity, pid: id,price:pro.price }
        let newQuantity = 0
        //product already in cart
        if (cart) {
            let cartArr = JSON.parse(cart)
            let z = cartArr.filter((item, index) => {
                if (item.pid === id) {
                    //same product found
                    newQuantity = parseInt(item.quantity) + parseInt(quantity)
                    if (newQuantity > 10) {
                        newQuantity = 10
                    }
                    cartArr.splice(index, 1);
                    localStorage.setItem(
                        "cart", JSON.stringify([...cartArr, { quantity: newQuantity, pid: id }])
                    );
                    return item
                }
            })
            //Not found same Product
            if (z.length == 0) {
                cartArr.push(myCart);
                localStorage.setItem('cart', JSON.stringify(cartArr))
            }

        } else {
            //No data in cart of localstorage
            if (quantity > 10) {
                quantity = 10
                localStorage.setItem('cart', JSON.stringify([myCart]))
            } else {
                localStorage.setItem('cart', JSON.stringify([myCart]))

            }
        }
    }

    return (
        <>
            <PageHeader title="product" name={pro.name} />
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img className="img-fluid" src={`${mediaUrl}product/${pro.picture}`} alt="" />
                        </div>
                        <div className="col-lg-7 mt-5 mt-lg-0 pl-lg-5">
                            <h6 className="text-secondary text-uppercase font-weight-medium mb-3">Product details</h6>
                            <h1 className="mb-4">{pro.name}</h1>
                            <h5 className="font-weight-medium font-italic mb-4"><span style={{ textDecoration: "underLine" }} >Description</span> : {pro.description}</h5>
                            <br /><br /><br />
                            <h3 className="text-danger font-weight-medium m-0">Price: <span className='text-primary'> &#x20b9; {pro.price}/-</span></h3>
                            <div className="row">
                                <div className="col-sm-6 pt-3">
                                    <div className="d-flex align-items-center">
                                        <i className="fa fa-check text-primary mr-2"></i>
                                        <p className="text-secondary font-weight-medium m-0">100% Original Product</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 pt-3">
                                    <div className="d-flex align-items-center">
                                        <i className="fa fa-check text-primary mr-2"></i>
                                        <p className="text-secondary font-weight-medium m-0">Express Fast Delivery</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 pt-3">
                                    <div className="d-flex align-items-center">
                                        <i className="fa fa-check text-primary mr-2"></i>
                                        <p className="text-secondary font-weight-medium m-0">15 Days Return </p>
                                    </div>
                                </div>
                                <div className="col-sm-6 pt-3">
                                    <div className="d-flex align-items-center">
                                        <i className="fa fa-check text-primary mr-2"></i>
                                        <p className="text-secondary font-weight-medium m-0">1 Year Warrenty</p>
                                    </div>
                                </div>
                                <div className='row mt-5' >
                                    {
                                        quantity <= 10 ? <p className='text-danger mt-4'></p> : <p className='text-danger mt-4'>You can't buy more than 10 product at one time</p>
                                    }
                                    <div className='col-sm-12 col-lg-8'>
                                        <div>
                                            <div className='form-group' >

                                                <input type='number'
                                                    className='form-control'
                                                    onChange={(e) => setQuantity(e.target.value)}
                                                    value={quantity}
                                                    min={1}
                                                    max={10}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12 col-lg-4'>
                                        <button className='btn btn-primary'
                                            style={{ width: "200px" }}
                                            onClick={addToCart}
                                        >Add To Cart</button>
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
