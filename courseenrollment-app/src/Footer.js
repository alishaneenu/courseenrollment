import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <Instagram/>
            <Twitter/>
            <Facebook/>
            <Linkedin/>

        </div>
        <p>&copy;2024 eduTech.com</p>
        
      
    </div>
  )
}

export default Footer
