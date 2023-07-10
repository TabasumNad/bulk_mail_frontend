import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { Navigate, useNavigate } from 'react-router-dom';

 function Home() {

  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [sub, setSub] = useState("");
  const [message, setMessage] = useState("");

const navigate= useNavigate();

  const sendEmail = async (e) => {
      e.preventDefault();
// Connection to backend
      const res = await fetch("hhttps://bulk-mail-backend-l2aw.vercel.app/home", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              email,
              sub,
              message,
          })
      });


      const data = await res.json();
      console.log(data);

      if (data.status === 401 || !data) {
          console.log("error")
      } else {
          setShow(true);
          setEmail("")
          console.log("Email sent");
        //   navigate('/message');

      }
  }

  return (
    <div className='app'>
 {
                show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                    Your Email Succesfully Send
                </Alert> : ""
            }
           
            <div className="  container mt-0 pt-5">
                <div className='d-flex justify-content-center'>
                    <h1 className='font-weight-bold'>Send Emails in bulks </h1>
                    <img src="https://www.pcworld.com/wp-content/uploads/2023/04/gmail-logo-header.jpg?quality=50&strip=all" 
                    alt="gmail img" className='mx-3 rounded-4' style={{ width: "55px" }} />
                </div>
                <div className="d-flex justify-content-center">
                    <Form className='mt-5 col-lg-6'>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label className='lbl'><strong>Enter The Emails Of Recipient</strong></Form.Label>
                            <Form.Control className='colr' type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email:" />
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control className='colr' type="text" name='sub' value={sub} onChange={(e) => setSub(e.target.value)} placeholder="Sub:" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='colr' type="text" name='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message:" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={sendEmail}>
                            Send
                        </Button>
                    </Form>
                </div>

            </div>

            </div>

    
  );
}

export default Home;