import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Enquiry.css';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

function Enquiry() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setErrorMsg(true);
      setSuccessMsg(false); 
    } else {
      const enquiryData = {
        name: name,
        phoneNumber: phone,
        emailAddress: email
      };

     
      axios.post("http://localhost:8080/api/enquiries/save", enquiryData)
        .then((response) => {
          console.log("Enquiry submitted successfully: ", response.data);
          setSuccessMsg(true);
          setErrorMsg(false);

          
          setTimeout(() => {
            resetForm();
          }, 5000); 
        })
        .catch((error) => {
          console.error("There was an error submitting the enquiry: ", error.response || error.message);
          setErrorMsg(true);
          setSuccessMsg(false);
        });
    }
  };

  const validateForm = () => {
    const name2 = /^[a-zA-Z\s]+$/;
    const email2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phone2 = /^\d{10}$/;
    if (!name2.test(name) || !email2.test(email) || !phone2.test(phone)) {
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setErrorMsg(false);
    setSuccessMsg(false);
  };

  // Display error message or success message
  let alertMsg;
  if (errorMsg) {
    alertMsg = (
      <div className='Alert1'>
        <Alert variant="danger">
          Please enter valid data. Name should only contain letters and spaces, phone number should be 10 digits, and email should be in the correct format.
        </Alert>
      </div>
    );
  }
  if (successMsg) {
    alertMsg = (
      <div className='Alert2'>
        <Alert variant="success">
          Thank you for your enquiry. Our team will contact you within the next 24 hours.
        </Alert>
      </div>
    );
  }

  return (
    <div className='enquiryform'>
      <div className='div1'>
        <Form onSubmit={handleSubmit}>
          <h4><i>Fill out the form below to get more information about our programs and placement assistance.</i></h4>

          <Form.Group className="mb-3" controlId='uname'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId='uphone'>
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId='uemail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Button className='b3' variant="primary" type="submit">
            Submit
          </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button className='b3' variant="secondary" type="reset" onClick={resetForm}>
            Reset
          </Button>
        </Form>
        <br />
        <div>{alertMsg}</div>
      </div>
      <div className='div2'></div>
    </div>
  );
}

export default Enquiry;
