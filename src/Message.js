import React from 'react'
import { Link } from 'react-router-dom';

export default function Message() {
  return (
    <div className='bg-secondary vh-100'>
    <h1 className='note d-flex justify-content-center pt-5'>Email send successfully</h1>
    
    
   <h3 className='d-flex justify-content-center mt-5' > </h3>
    
   <Link to="/" className=' d-flex text-dark     justify-content-center'>
   <h3><strong >Click here to go back to Home</strong></h3>
               </Link>
    </div>
  )
}