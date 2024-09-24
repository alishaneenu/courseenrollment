
import Home from "./Home";
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Services from "./Services";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Courses from "./Courses"
import Enquiry from "./Enquiry"
import EnrollmentForm from "./EnrollmentForm";



function App() {
  return (
     <div className="App">
          
            <BrowserRouter>
            <Routes>
              <Route path="/"element={<Home/>}/>
              <Route path="/services"element={<Services/>}/>
              <Route path="/aboutus"element={<AboutUs/>}/>
              <Route path="/contactus"element={<ContactUs/>}/>
              <Route path="/courses"element={<Courses/>}/>
              <Route path="/enquiry"element={<Enquiry/>}/>
              <Route path="/enrollmentform/:courseId"element={<EnrollmentForm/>}/>
              </Routes>
              
              </BrowserRouter>
          
    </div>
  );
}

export default App;
