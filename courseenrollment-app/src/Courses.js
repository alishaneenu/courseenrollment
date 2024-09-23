import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Courses.css';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

function Courses() {
  const [courses, setCourses] = useState([]);
 
  
  useEffect(() => {
    axios.get('http://localhost:8080/api/courses/display')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching the courses:', error);
      });
  }, []);

  return (
    <div className='Course'>
      <h1 className='h'>EduTech</h1>
      <p className='p'>Empowering Minds, Shaping Future</p>
      <Marquee className='m'>Enroll now in our latest technology and programming courses!</Marquee>
      <div className="course-container">
        {courses.map(course => (
          <div key={course.courseId} className="course-card">
            <img src={''} alt={course.courseName} className="course-image" />
            <div className="course-details">
              <h3>{course.courseName}</h3>
              <p><strong>Course ID:</strong> {course.courseId}</p>
              <p><strong>Duration:</strong> {course.courseDuration}</p>
              <p><strong>Fees:</strong> {course.fees}</p>
              <p><strong>Description:</strong> {course.description}</p>
              <p><strong>Technology Used:</strong> {course.technology}</p>
              <a href="/brochure" className="course-brochure" download>Download Brochure</a>
              <Link to={'/enrollmentform'}>
                <button className="enroll-btn" >Enroll Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
