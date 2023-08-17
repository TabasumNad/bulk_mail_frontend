import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate } from 'react-router-dom';
import * as xlsx from 'xlsx';


 function Email() {

  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const [subject, setSubject] = useState("");
  const [message,setMessage]=useState("");
  const [recipients, setRecipients] = useState([]);

const navigate= useNavigate();

const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];
  setFile(selectedFile);


// Parse the Excel file and extract email addresses
const reader = new FileReader();
reader.onload = (e) => {
  const data = new Uint8Array(e.target.result);
  const workbook = xlsx.read(data, { type: 'array' });
  const sheetName = workbook.SheetNames[0];
  const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
  const emailAddresses = sheetData.map((row) => row.email);
  setRecipients(emailAddresses);
};
reader.readAsArrayBuffer(selectedFile);
};


  const sendEmail = async () => {
    
            try {
                const response = await axios.post('https://mail-in-bulk.onrender.com/send-emails', {
                    recipients: recipients.map(recipients => recipients.trim()), // Split and clean up the email list
                  subject,
                  message,
                  
                },
                // navigate('/message')
                );
               
                console.log(response.data);
                }
            
        catch (error) {
            console.error('Error sending emails:', error);
               
          }
        };
      

  return (
    <div className='app '> 
        
        <div> 
            
            <div className="  container  mt-0 pt-5">
                <div className='d-flex justify-content-center'>
                    <h1 className='font-weight-bold'>Send Emails in bulks </h1>
                    <img src="https://www.pcworld.com/wp-content/uploads/2023/04/gmail-logo-header.jpg?quality=50&strip=all" 
                    alt="gmail img" className='mx-3 rounded-4' style={{ width: "55px" }} />
                </div>    
                
                <div>
      <h3 className='note'><b>Verify that the Excel file you're uploading contains the email addresses in a column named </b> <strong>"email"</strong></h3>

      <input type="file" accept=".xlsx" onChange={handleFileChange} />

      <div className="d-flex justify-content-center">
                    <Form className='mt-5 col-lg-6'>
                        <div>
        <strong>Recipients:</strong>
        <ul>
        {recipients.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
            
           
        </ul>
      </div>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control className='colr' type="text" name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject:" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='colr ht' type="text" name='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Content:" />
                        </Form.Group>
                        
                        <Button type="submit" class="bi bi-send-check" onClick={sendEmail} >Send</Button>
                    </Form>
                </div>
    </div>
            </div>
            </div>
            </div>

    
  );
}



export default Email;