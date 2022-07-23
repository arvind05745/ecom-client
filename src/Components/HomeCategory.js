import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseApiUrl,mediaUrl } from '../Config'
import Category from './Category'
import UseTitle from './UseTitle'
import PageHeader from './PageHeader'
export default function HomeCategory() {
    
    const [data,setData]=useState([])

    useEffect(()=>{
        async function fetchdata(){
             let res=await axios.get(`${baseApiUrl}category`)
             setData(res.data.msg)
        }
        fetchdata()
    },[])

    // UseTitle("Category")

  return (
    <>
    <PageHeader title={"Category"}/>
    <div className="container-fluid pt-5 pb-3">
        <div className="container">
            <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">Our Category</h6>
            <h1 className="display-4 text-center mb-5">What We Offer</h1>
            <div className="row">
{
    data.map((v,i)=>{
      return(
        <Category title={v.name.toUpperCase()} key={i} id={v._id} image={`${mediaUrl}category/${v.picture}`}/>
      )
    })
}
            </div>
        </div>
    </div>
    </>
  )
}
