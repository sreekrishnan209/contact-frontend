import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';



function View() {

  const base_url='http://localhost:8000'

  // get an id from url

  const {id} = useParams()
  console.log(id);

  const [contactData,setContactData]=useState({})

  // api fetching
  const fetchAnContact=async(id)=>{
    const result=await axios.get(`${base_url}/get-an-contact/${id}`)
    console.log(result.data.contacts);
    setContactData(result.data.contacts)
  }
  console.log(contactData);

  useEffect(()=>{
    fetchAnContact(id)
  },[])


  return (
    <div>
      <h3 className='text-center m-4'>View Contact Details</h3>
      <div className="row container mt-3 p-5">
        <div className="col-8">
          {/* card */}
          <MDBCard className='shadow bg-light'>
      <MDBCardBody>
        <MDBCardTitle className='text-center m-2'>Contact View</MDBCardTitle>
        <MDBCardText>
          {
                    <MDBListGroup style={{ minWidth: '22rem' }} light className='bg-light'>
                    <MDBListGroupItem aria-current='true' className='px-3'>
                      Contact Id : {contactData.id}
                    </MDBListGroupItem>
                    <MDBListGroupItem  className='px-3'>
                      Contact Name : {contactData.name}
                    </MDBListGroupItem>
                    <MDBListGroupItem className='px-3'>
                      Address : {contactData.address}
                    </MDBListGroupItem>
                    <MDBListGroupItem className='px-3'>
                      Email : {contactData.email}
                    </MDBListGroupItem>
                    <MDBListGroupItem className='px-3'>
                      Phone Number : {contactData.phonenumber}
                    </MDBListGroupItem>
                  </MDBListGroup>
          }

        </MDBCardText>
      </MDBCardBody>
    </MDBCard>

        </div>
        <div className="col-4">
          {/* image */}
          <img width={'380px'} height={'380px'} src="https://i.pinimg.com/originals/91/7c/06/917c06856035dd3d396b62916d082472.gif" alt="" />
        </div>
      </div>
      <div className='text-center'>
          <Link to={'/list'}>
          <MDBBtn className='m-3'>Go Back</MDBBtn>
          </Link>
        </div>
    </div>
  )
}

export default View