
import {style} from './Product.module.scss';
import Header from '../../Components/Header';
import { useEffect, useState } from 'react';
import {studDetails} from '../Mockdata';
import { useNavigate } from "react-router-dom";


const Product=()=>{

const [studentDetails,setStudentDetails]=useState(studDetails);
 const navigate = useNavigate();

console.log(studentDetails,'studentDetails@@##');
useEffect(()=>{
  console.log('calling UseEffect');
  //clickMe();
},[]);

const clickMe=()=>{
   console.log('Click Me Calling...!');
   setStudentDetails('Happy Teacher DaY...!');
}

const redirect=(item)=>{
   console.log('ID!',item);
   navigate("/student_details"); 
   localStorage.setItem('stud_id',JSON.stringify(item)); // setting id value in localstorage 
}

 return <>
       <Header/>
       <h1> Student Details </h1>
       <div className='container'>
      {studentDetails.map((item,index)=>{
       return <div className='card mt-4'>
        <div className='card-body' key={index}>
               <p>Id: {item.id}</p>
              <p>Name:{item.name} </p>
              <p>Email:{item.email} </p>
              <p>Mobile:{item.mob} </p>
              <button className='btn btn-danger' onClick={()=>redirect(item)}>View</button>
         </div>
        </div>   
       })}
      </div>
       {/* <button className='btn btn-danger' onClick={clickMe}> clickMe </button> */}
    </>
}

export default Product;