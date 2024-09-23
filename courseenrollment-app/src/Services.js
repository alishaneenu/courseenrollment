import React from 'react'
import './Services.css'
import Navbarr from './Navbarr'
import Footer from './Footer'

function Services() {
  return (
  
     
      <div className="services-container">
         <Navbarr/>
      
      <div className="service-cards">
        <div className="service-card">
          <h2>Comprehensive Course Offerings</h2>
          <p>Explore our diverse range of courses covering the latest technologies, including AI, data science, cybersecurity, and more. Whether you're a beginner or looking to upskill, we have the right program for you.</p>
          
        </div>
        <div className="service-card">
          <h2>Flexible Learning Options</h2>
          <p>Choose between online and offline classes that fit your schedule. Our hybrid model allows you to learn at your own pace while enjoying the benefits of direct interaction with instructors and peers.</p>
          
        </div>
        <div className="service-card">
          <h2> Placement Assistance</h2>
          <p>Get personalized support from our dedicated placement team. We connect you with top industry employers, help you with resume building, interview preparation, and provide job leads tailored to your skills.</p>
          
        </div>
        <div className="service-card">
          <h2>Certification Programs</h2>
          <p>Enhance your qualifications with industry-recognized certifications. Our courses prepare you for various certification exams, equipping you with the credentials that employers value.</p>
          
        </div>
        <div className="service-card">
        <h2>Expert Faculty Guidance</h2>
          <p>Learn from experienced industry professionals who bring real-world insights into the classroom. Our instructors are committed to providing you with the knowledge and skills necessary to succeed in today's tech landscape.</p>
        </div>
        <div className="service-card">
        <h2> Community and Networking Opportunities</h2>
          <p>Join a vibrant community of learners and professionals. Participate in workshops, seminars, and networking events that help you build connections and collaborate with like-minded individuals in the tech field.</p>
        </div>
       
      </div>
  
      <Footer/>
    </div>
  )
}

export default Services
