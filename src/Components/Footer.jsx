import React from 'react'
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';


function Footer() {
  return (
    <div>
          <MDBFooter bgColor='light' className='text-center text-white ' style={{backgroundColor:'white'}} >
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3 text-dark' style={{ backgroundColor:'white'}}>
        © 2024 Copyright:
        <a className='text-dark' href='/'>
          Talk N Talk.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer