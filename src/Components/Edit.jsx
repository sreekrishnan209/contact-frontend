import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';



function Edit() {

  const [ctid,setId]=useState("")
  const [ctname,setName]=useState("")
  const [ctaddress,setAddress]=useState("")
  const [ctemail,setEmail]=useState("")
  const [ctphonenumber,setPhonenumber]=useState("")

  // get a particular id of a contact from the url
  const {id}=useParams()
  console.log(id);

  const base_url='http://localhost:8000'

  // get a particular details of a contact
  const fetchAnContact=async(id)=>{
    const result=await axios.get(`${base_url}/get-an-contact/${id}`)
    console.log(result.data.contacts);
    setId(result.data.contacts.id)
    setName(result.data.contacts.name)
    setAddress(result.data.contacts.address)
    setEmail(result.data.contacts.email)
    setPhonenumber(result.data.contacts.phonenumber)

  }

  useEffect(()=>{
    fetchAnContact(id)
  },[])


  const location = useNavigate()
  // update a contact function call
  const UpdateContact =async(e)=>{
    e.preventDefault()
    const body ={
      id:ctid,
      name:ctname,
      address:ctaddress,
      email:ctemail,
      phonenumber:ctphonenumber
    }
    const result =await axios.post(`${base_url}/update-an-contact/${id}`,body) 
    console.log(result);
    alert(result.data.message)
    location('/list')
  }


  return (
    <div>
            <div className="container">
        <h1 className='text-center m-3'>Edit Contact Details</h1>
        <div className='m-3 text-center'>
        <h1><i style={{fontSize:'120px', color:''}} className='fa-solid fa-user m-3'></i></h1>
        </div>
        <div>
          <form className='p-5 mx-5 border shadow' action="">
          <MDBInput onChange={(e)=>setId(e.target.value)} value={ctid} label='Id' id='formControlLg1' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setName(e.target.value)} value={ctname} label='Name' id='formControlLg2' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setAddress(e.target.value)} value={ctaddress} label='Address' id='formControlLg3' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setEmail(e.target.value)} value={ctemail} label='Email' id='formControlLg4' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setPhonenumber(e.target.value)} value={ctphonenumber} label='Phone Number' id='formControlLg5' type='text' size='lg' />
      <br />

      <div className='text-center'>
        <button onClick={(e)=>UpdateContact(e)} style={{backgroundColor:'green'}} className='btn btn-success flated text-light m-4'>Update</button>
      </div>

          </form>
        </div>
      </div>

    </div>
  )
}

export default Edit