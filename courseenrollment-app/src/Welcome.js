import React, { useState } from 'react'
import Bmiform from './Bmiform';


function Welcome() {
    const [bmi,setBmi] = useState(null);
    const BmiData  = (h,w)=>
    {
     console.log("Height & weight in Parent "+h+" :"+w);
   let b = calculateBmi(h,w);
  setBmi(b);
    }
     const calculateBmi = (h,w)=>{
       let m;
       m=w/(h*h);
       return m;
 
     }
 
   

    

  return (
    <div>
        
     <h3>BMIScore is:{bmi}</h3>
    <Bmiform getBmi={ BmiData}/>
      
    </div>
  )
}

export default Welcome
