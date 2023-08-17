
import React, { useState } from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Credential from './Credential';

function Login(){


    
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();

    const navigate=useNavigate();



    const handleSubmit=(e)=>{
       
        e.preventDefault()
        
        axios.post('https://bulk-mail-backend.vercel.app/login',{email})
        .then(result=>{
            console.log(result)
            if(result.data ==="Success")
            {

                navigate('/sendmail')
            }else
                
              {
                navigate('/credential')
              }
                
                
            
        })
        .catch (err=>console.log(err) )
    }

    return(
        <div>
            <h2 className='note d-flex justify-content-center align-items-center bg-secondary mb-0 pt-3'>Please wait for some seconds</h2>
        
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            
        <div className='bg-white p-3 rounded w-25'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
               
                   <div className='mb-3'>
                   <label htmlFor='email'>
                        <strong>Email</strong>
                    </label>
                    <input
                    type="email"
                    placeholder='Enter Email'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded-0'
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                   </div>
                   
                   <div className='mb-3'>
                   <label htmlFor='email'>
                        <strong>Password</strong>
                    </label>
                    <input
                    type="password"
                    placeholder='Enter Password'
                    autoComplete='off'
                    name='password'
                    className='form-control rounded-0'
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                   </div>
                   <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
            </form>
            </div>
            </div>
            </div>
    )
}

export default Login;