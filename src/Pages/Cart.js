import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseApiUrl} from '../Config'
import PageHeader from '../Components/PageHeader'
import { Link, useNavigate } from 'react-router-dom'

export default function Cart() {
  let cart = localStorage.getItem('cart')
  let cartArr = JSON.parse(cart)
  let loginUserEmail = localStorage.getItem('frontUser')

  const navigate = useNavigate()
  const [myItems, setMyItems] = useState([])
  const [checkOutTotal, setCheckOutTotal] = useState(0)
  const [address, setAddress] = useState([])
  const [delAddress, setDelAddress] = useState([])



  let myCart = []
  let c = 0

  useEffect(() => {

    async function allpros() {


      cartArr.forEach(async (v, i) => {
        let res = await axios.get(`${baseApiUrl}product/${v.pid}`)
        if (res) {
          let myob = res.data.msg
          myob.quantity = v.quantity
          myCart.push(myob)
          c += (parseFloat(res.data.msg.price) * parseFloat(v.quantity))
          setMyItems([...myCart, ...myItems])
        }

        setCheckOutTotal(c + checkOutTotal)

      });
    }

    allpros()
  }, [])

  function empty() {
    localStorage.removeItem('cart')
    window.location.reload()
  }


  //place order

 
function placeOrder() {
  var options = {
    "key": "rzp_test_I9nsP09pkr4IdT", // Enter the Key ID generated from the Dashboard
    "amount": checkOutTotal*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": loginUserEmail,
    "description": "Test Transaction",
    "image": "https://listingprowp.com/wp-content/uploads/2020/09/RAZORPAY_DetailsPage.png",
    // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": async function (response) {
      if (response) {
        let order = { email: loginUserEmail, name: loginUserEmail, address:delAddress, product: cartArr }
        let res = await axios.post(`${baseApiUrl}place-order`, order)
        if (res.data.status === 200) {
          localStorage.removeItem('cart')
          navigate('/')
        }
      }
    },
    "prefill": {
        "name": loginUserEmail,
        "email": loginUserEmail,
        "contact": "9999999999"
    },
    "notes": {
      "address": "Razorpay Corporate Office"
    },
    "theme": {
      "color": "#3399cc"
    }
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.on('payment.failed', function (response) {
    console.log(response.error.code);
    console.log(response.error.description);
    console.log(response.error.source);
    console.log(response.error.step);
    console.log(response.error.reason);
    console.log(response.error.metadata.order_id);
    console.log(response.error.metadata.payment_id);
  });
  rzp1.open();
}

  //get address

  useEffect(() => {
    async function getaddress() {
      let res = await axios.get(`${baseApiUrl}address/${loginUserEmail}`)
      setAddress(res.data.msg)
    }

    getaddress()
  }, [])

  return (
    <>
      <PageHeader title={"cart"} name={"My Cart"} />
      <div className='container'>
        <table className="table container">
          <thead>
            <tr>
              <th>No.</th>
              <th className='text-center'>Product</th>
              <th>quantity*price</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {
              myItems.map((v, i) => {
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{v.description}</td>
                    <td>{v.quantity} x {v.price}</td>
                    <td>{v.quantity * parseInt(v.price)}</td>
                  </tr>
                )
              })
            }
          </tbody>
          {
            cart ?
              <tfoot style={{ "background": "aqua" }}>
                <tr style={{ fontSize: "25px" }}>
                  <td colSpan={2} className="text-center text-danger">Sub Total</td>
                  <td colSpan={2} className='text-primary text-right'>&#x20b9; {checkOutTotal}/-</td>
                </tr>
                <tr style={{ "background": "white" }}>
                  <td className="text-left text-danger"> <button className='btn btn-danger' onClick={empty}>Empty Cart</button></td>
                  <td colSpan={2} className='text-primary text-right'>
                    <label className='text-success' style={{ "fontSize": "20px" }}>Shipping Address</label><br />
                    <select onChange={(e) => {
                      setDelAddress(e.target.value)
                    }}>
                      <option disabled selected>select address</option>
                      {
                        address.map((v, i) => {
                          return (
                            <option key={i} value={v.address}>{v.address}</option>
                          )
                        })

                      }
                    </select>
                  </td>
                  <td colSpan={1} className='text-primary text-right'>
                    {
                      loginUserEmail ? (<button className='btn btn-primary' onClick={placeOrder}>Place Order</button>) : (<button className='btn btn-primary' onClick={() => navigate('/login')}>Login</button>)
                    }
                  </td>
                </tr>
              </tfoot> :
              <h1>Oops!...Your Cart Is Empty </h1>

          }
        </table>
        {
          cart ?
            <Link to='/address'><button className='btn btn-success' style={{ "borderRadius": "25px" }}>Add New Address</button></Link> : ""

        }
      </div>
    </>
  )
}



//key Id--> rzp_test_I9nsP09pkr4IdT
//key sec --> OicqGvV4C5nRRApQVdrmjdNe