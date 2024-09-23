import "./Home.css"
import React from 'react'
import { Link } from 'react-router-dom'
import Navbarr from "./Navbarr"
import Footer from "./Footer"





function Home() {
  return (
    
    <div className="home">
      <Navbarr/>
      <br></br>
      <br></br>
      
      <div className='headerContainer'>
        <h1>Learn.Innovate.Succeed.Repeat</h1>

<h3>We help you land your dream job and succeed in your chosen field !</h3>
<Link to="/courses"><button className="Courses">Courses</button></Link>
<Link to="/enquiry"><button className="enquiry">Enquiry</button></Link>
      </div>
      <br></br>
      <br></br>
      <Footer/>
      </div>
      
  )
}

export default Home
