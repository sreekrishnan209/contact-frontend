import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import {Link} from 'react-router-dom'


function List() {

  const base_url='http://localhost:8000'

  const [allContacts,setAllContacts] =useState([])

const fetchData =async()=>{
  const result = await axios.get(`${base_url}/get-all-contacts`)
  console.log(result.data.contacts);
  setAllContacts(result.data.contacts)
}
console.log(allContacts);

const DeleteContact =async(id)=>{
  const result =await axios.delete(`${base_url}/delete-contact/${id}`)
  alert(result.data.message)
  fetchData()
}

useEffect(()=>{
  fetchData()
},[])

  return (
    <div>
        <div className="container">
            <h1 className='text-center m-5'>
              <i className='fa-solid fa-users mx-3'></i>All Contacts</h1>
              <Link to={'/add'}>
              <a style={{float:"right",backgroundColor:'green'}} className='btn btn-success text-light' href="">
                <i className='fa-solid fa-add mx-2 fs-3'></i>
                Add Contacts</a>
              </Link>
                <MDBTable align='middle'>
      <MDBTableHead>
        <tr className=''>
          <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Address</th>
          <th scope='col'>Email</th>
          <th scope='col'>Phn Number</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          allContacts.map((item)=>(
            <tr>
            <td>
              {item.id}
            </td>
            <td>
            👤 {item.name}
            </td>
            <td>
              {item.address}
            </td>
            <td>
             📧  {item.email}
            </td>
            <td>
            📞 {item.phonenumber}
            </td>
            <td>
              <div className='d-flex justify-content-evenly'>
              <Link to={`/view/${item.id}`}>
              <i className='fa-solid fa-eye text-info'></i>
              </Link>
              <Link to={`/edit/${item.id}`}> 
              <i className='fa-solid fa-pen text-success mx-3'></i>
              </Link>
             <i onClick={()=>DeleteContact(item.id)} className='fa-solid fa-trash text-danger'></i>
              </div>
            </td>
  
          </tr>
          ))
        }
      </MDBTableBody>
      <div>
    <Link to={'/'}>
    <a style={{float:'right',backgroundColor:'red',marginLeft:''}} className='btn btn-danger m-3 text-light'>Back</a>
    </Link>

    </div>

    </MDBTable>

        </div>
    </div>
  )
}

export default List