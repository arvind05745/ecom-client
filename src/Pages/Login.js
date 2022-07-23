import React, { useEffect, useState } from 'react'
import PageHeader from '../Components/PageHeader'
import { useNavigate } from 'react-router-dom'
import { baseApiUrl } from "../Config"
import axios from 'axios'


export default function Login() {

  const [rName, setRName] = useState('')
  const [rEmail, setREmail] = useState('')
  const [rPassword, setRPassword] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message,setMessage]=useState('')
  const navigate = useNavigate("/")

  useEffect(() => {
    let user = localStorage.getItem('frontUser')
    if (user) {
      navigate('/')
    }
  }, [])
  //Registration user
  async function register(e) {
    e.preventDefault()
    let res = await axios.post(`${baseApiUrl}registration`, { email: rEmail, password: rPassword, name: rName })
    console.log(res)
    if (res.data.status === 200) {
      localStorage.setItem("frontUser", rEmail)
      navigate('/')
    } else {
      setMessage("not login")
    }
  }

  //Login user
  async function userLogin(e) {
    e.preventDefault()
    if (!email || !password) {
        setMessage("Please fill all the fields")
    } else {
        try {
            let res = await axios.post(`${baseApiUrl}login`, { email, password })
            console.log(res)
            localStorage.setItem("frontUser", res.data.msg.email)
            navigate('/')
            setMessage("")
        } catch (err) {
            setMessage("Wrong Credentials")
        }

    }
}

  return (
    <>
      <PageHeader title={"Login/Registration"} name={"Login/Registration "} />

      {/* Login */}
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <h1>Login</h1>
            <form onSubmit={userLogin}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                <div className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <p className='text-danger'>{message}</p>
              <button type="submit" className="btn btn-info">Login</button>
            </form>
          </div>


          {/* Registration */}
          <div className='col-sm-6'>
            <h1>Registration</h1>
            <form onSubmit={register}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" onChange={(e) => setRName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => setREmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" onChange={(e) => setRPassword(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-success">Registration</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
