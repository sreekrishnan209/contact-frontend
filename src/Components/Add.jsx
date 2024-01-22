import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Add() {


  const [id,setId]=useState("")
  const [name,setName]=useState("")
  const [address,setAddress]=useState("")
  const [email,setEmail]=useState("")
  const [phonenumber,setPhonenumber]=useState("")

  const base_url='http://localhost:8000/add-contact'

  const location = useNavigate()  // component to component navigation

  const AddContact =(e)=>{
    e.preventDefault()
    console.log(id,name,address,email,phonenumber);
    // Api call 
    const body={
      id,name,address,email,phonenumber
    }
    const result = axios.post(base_url,body).then((response)=>{
      console.log(response);
      alert(response.data.message)
      location('/list')
    })
    .catch((error)=>{
      alert("Please enter a unique contact Id")
    })
  }


  return (
    <div>
      <div className="container">
        <h1 className='text-center m-3'>Add Contact Details</h1>
        <div className='m-3 text-center '>
          <h1><i style={{fontSize:'120px', color:''}} className='fa-solid fa-user m-3'></i></h1>
        </div>
        <div>
          <form className='p-5 mx-5 border shadow' action="">
          <MDBInput onChange={(e)=>setId(e.target.value)} label='Id' id='formControlLg1' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setName(e.target.value)} label='Name' id='formControlLg2' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setAddress(e.target.value)} label='Address' id='formControlLg3' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setEmail(e.target.value)} label='Email' id='formControlLg4' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setPhonenumber(e.target.value)} label='Phone Number' id='formControlLg5' type='text' size='lg' />
      <br />

      <div className='text-center'>
        <button onClick={(e)=>AddContact(e)} style={{backgroundColor:'green'}} className='btn btn-success flated text-light m-4'>Add</button>
      </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Add