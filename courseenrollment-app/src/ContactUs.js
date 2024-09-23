import React from 'react'
import './ContactUs.css'
import Navbarr from './Navbarr'
import Footer from './Footer'

function ContactUs() {
  return (
   
    <div className="contact-container">
      <Navbarr/>
      {/* Location Card */}
      <div className="contact-card">
        <h3>Location</h3>
        <p>Edutech Headquarters</p>
        <p>123 Learning Street,</p>
        <p>Innovation City, Techland 45678</p>
      </div>

      {/* Phone Numbers Card */}
      <div className="contact-card">
        <h3>Phone Numbers</h3>
        <p><strong>Support:</strong> +1 234 567 8901</p>
        <p><strong>Query:</strong> +1 234 567 8902</p>
        <p><strong>Placement:</strong> +1 234 567 8903</p>
      </div>

      {/* Email Addresses Card */}
      <div className="contact-card">
        <h3>Email Addresses</h3>
        <p><strong>Support:</strong> support@edutech.com</p>
        <p><strong>Query:</strong> query@edutech.com</p>
        <p><strong>Placement:</strong> placement@edutech.com</p>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactUs;


      