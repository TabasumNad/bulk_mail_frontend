import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { Navigate, useNavigate } from 'react-router-dom';
import Chart1 from './Chart1';
import { Link } from 'react-router-dom';
import Chart2 from './Chart2';
import './App.css';
// import Email from './Email';

 function Home() {

  

  return (
    
    <div className=''>
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <Link  to="/signup" class="nav-link active" aria-current="page" href="#">SignUp</Link>
        <Link  to ="/login" class="nav-link active" aria-current="page" href="#">Login</Link>
        
        
      </div>
    </div>
  </div>
</nav>
<h2 className='top mt-2'><b>  <u>Welcome to bulk mail sender</u></b></h2>
        <p className='theory'><strong>A bulk mail is a marketing message sent by a brand to multiple recipients at once. 
            It aims to promote a business, sell goods, and develop relationships. Analyzed graphs for some basic informaton. Let's give a try by <u>signup</u> or <u>login</u> if already created a account.
            </strong></p>
        <div className=' flex-contain'>
        <div className='wid pt-2 '>
            <h5 className='mt-2 pt-4 me-3 sub'>Given below graph shows the survey report of year 2022-2023, most common emails received</h5>
            <Chart1/></div>
        <div className='wid pt-1 ' > 
        <h5 className='mt-3 pt-4 me-2 sub' >Given below graph shows the survey report of year 2022-2023, most common emails received</h5>
            <Chart2/>
            </div>
            </div>
            <div className='wid'>
            {/* <Link to="/sendmail" className='btn btn-default w-100 bg-light rounded-0 text-decoration-none'>
                    Click Here To send Mail
                </Link> */}
                {/* <Email/> */}
                   </div>
                   <footer class="py-5 mt-3 bg-dark">
    <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
</footer>
            </div>

    
  );
}

export default Home;