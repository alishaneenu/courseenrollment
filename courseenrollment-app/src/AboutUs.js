import React from 'react'
import "./About.css"
import Navbarr from './Navbarr'
import Footer from './Footer'
import image from './images/about.jpeg'


function AboutUs() {
  return (
    <div className='about'>
      <Navbarr/>
      
        <div className='content'>
          <h1 className='h1'>ABOUT US</h1>
          
       <p>At EduTech, we are committed to revolutionizing the way technology and programming education is delivered. Founded on the principles of innovation and excellence, our institution is dedicated to equipping individuals with the skills and knowledge needed to thrive in today’s rapidly evolving digital landscape.

Our mission is simple: to bridge the gap between education and industry. In a world where technology advances at breakneck speed. That’s why we offer a diverse range of courses focused on the latest technologies and programming languages. From cutting-edge software development techniques to emerging tech trends.</p>

<p>EduTech’s courses are crafted by industry experts who bring real-world experience and a passion for teaching. knowledge but also share practical insights and hands-on experience, giving students a comprehensive understanding of their chosen fields.Whether you're looking to kickstart your career in tech or upskill to advance in your current role, Edutech is the perfect place to begin. With a variety of courses designed to meet industry demands and expert instructors to guide you along the way, Edutech is committed to your success.</p><p>Our mission is to empower learners with the tools, resources, and support needed to excel in their careers and stay ahead of the technological curve. We believe that continuous learning and adaptability are key to success, and we strive to provide an environment where students can unlock their full potential.Our Vision
To become a global leader in technology education by continuously evolving our courses and services to meet the changing needs of the industry and the learners we serve.</p>
        </div>
        <div className='images'><img src={image}alt="aboutus" style={{width:'674px',height:'auto'}}></img></div>
        <Footer/>
        </div>
  )
}


export default AboutUs
