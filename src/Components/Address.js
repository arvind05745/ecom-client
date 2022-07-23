import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { baseApiUrl } from '../Config'
import { useNavigate } from 'react-router-dom'

export default function Address() {

  const [address, setAddress] = useState("")
  const navigate=useNavigate()

  const loginUser = localStorage.getItem('frontUser')

  async function addAddress(e) {
    e.preventDefault()
    let res = await axios.post(`${baseApiUrl}add-address`, { address, email: loginUser })
    navigate('/cart')
  }
  return (
    <>
      <div className='container'>
        <h1 className='text-center mt-5'>Dispatch Address</h1>
        <form onSubmit={addAddress}>
          <div className="mb-3">
            <label className="form-label">Address :-</label>
            <input type="text" className="form-control" onChange={(e) => setAddress(e.target.value)} />
          </div>
          {
            loginUser ? <button type="submit" className="btn btn-primary">Add Address</button> : <button type="submit" className="btn btn-primary" onClick={() => navigate('/login')}>Login To Add Address</button>
          }
        </form>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-9'></div>
            <div className='col-sm-3'>
              <Link to="/cart" style={{ "width": "200px" }} className='btn btn-success'>Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
