import React, { useState } from 'react';
import './EnrollmentForm.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

function EnrollmentForm({courseid}) {
  const [name1, setName1] = useState("");
  const [phone1, setPhone1] = useState("");
  const [email1, setEmail1] = useState("");
  const [errorMsg1, setErrorMsg1] = useState(false);
  const [successMsg1, setSuccessMsg1] = useState(false);
  const resetForm = () => {
    setName1("");
    setEmail1("");
    setPhone1("");
    setErrorMsg1(false);
    setSuccessMsg1(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setErrorMsg1(true);
      setSuccessMsg1(false);
    } else {
      
      const registrationData = {
        name: name1,
        mobile: phone1,
        email: email1
      };

      
      axios.post('http://localhost:8080/api/registrations/register', registrationData)
        .then(response => {
          console.log(response.data);
          setSuccessMsg1(true);
          setErrorMsg1(false);
          
          // Delay resetting the form to show the success message
          setTimeout(() => {
            resetForm();
          }, 6000);
        })
        .catch(error => {
          console.error('There was an error!', error);
          setErrorMsg1(true);
          setSuccessMsg1(false);
        });
    }
  };

  const validateForm = () => {
    const name3 = /^[a-zA-Z\s]+$/;
    const email3 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phone3 = /^\d{10}$/;
    if (!name3.test(name1) || !email3.test(email1) || !phone3.test(phone1)) {
      return false;
    } else {
      return true;
    }
  };

  let alertMsg;
  if (errorMsg1) {
    alertMsg = (
      <div className='Alert1'>
        <Alert variant="danger">
          Please enter valid data. Name should only contain letters and spaces, phone number should be 10 digits, and email should be in the correct format.
        </Alert>
      </div>
    );
  }
  if (successMsg1) {
    alertMsg = (
      <div className='Alert2'>
        <Alert variant="success">
          Thank you for your registration. Your enrollment has been successfully completed, We will contact you for further updates.
        </Alert>
      </div>
    );
    
  }

  return (
    <div className='enrollmentform'>
      <Form onSubmit={handleSubmit} className='f'>
        <h4><i>"Enroll today to kickstart your career with our industry-relevant courses and comprehensive placement assistance!"</i></h4>
        <Form.Group className="mb-3" controlId="courseid">
          <Form.Label>CourseId</Form.Label>
          <Form.Control
            type="text"
            
            
            
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            value={phone1}
            onChange={(e) => setPhone1(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your Email address"
            value={email1}
            onChange={(e) => setEmail1(e.target.value)}
          />
        </Form.Group>
        <Button className='b1' variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <div>{alertMsg}</div>
    </div>
  );
}

export default EnrollmentForm;
