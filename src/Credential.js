import React from 'react'
import { Link } from 'react-router-dom';


function Credential() {
  return (
    <div>
        <h1 className='d-flex justify-content-center mt-5'>Incorrect Credential Try again</h1>
        
        
       <h3 className='d-flex justify-content-center mt-5' > </h3>
        
       <Link to="/login" className=' d-flex text-light bg-dark    justify-content-center'>
       <h3><strong >Click here try again</strong></h3>
                   </Link>
        </div>
  )
}

export default Credential;