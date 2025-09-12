import { useEffect, useState } from "react";
import {studMoreDetails} from '../../Pages/Mockdata';

const Student_Details=()=>{

    const[studMoreDetails1,setStudMoreDetails1]=useState(studMoreDetails);
    const[studDetails,setStudeDetails]=useState({});
    
    useEffect(()=>{
      const stud_data=JSON.parse(localStorage.getItem('stud_id')) || {}; 
      setStudeDetails(stud_data);
      //setStudMoreDetails1(studMoreDetails);
    },[]);

 return <>
   <h1> Student Profile Page </h1>
     <div className='container'>
      <div className='card mt-4'>
        <div className='card-body'>
              <p>Id: {studDetails.id}</p>
              <p>Name:{studDetails.name} </p>
              <p>Email:{studDetails.email} </p>
              <p>Mobile:{studDetails.mob} </p>
              <p>Gander:{studMoreDetails1[0].Gender} </p>
               <p>Blood Group:{studMoreDetails1[0].bgroup} </p>
              <p>Address: {studMoreDetails1[0].address}</p>
              <p>City: {studMoreDetails1[0].city}</p>
              <p>Landmark: {studMoreDetails1[0].landmark}</p> 
       </div>
        </div>   
        </div>
 </>


}

export default Student_Details;