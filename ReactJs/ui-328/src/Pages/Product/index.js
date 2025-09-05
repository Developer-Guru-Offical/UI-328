
import {style} from './Product.module.scss';
import Header from '../../Components/Header';
import { useEffect, useState } from 'react';

const Product=()=>{

const [studentDetails,setStudentDetails]=useState('Developer Guru');


useEffect(()=>{
  console.log('calling UseEffect');
  //clickMe();
},[]);

const clickMe=()=>{
   console.log('Click Me Calling...!');
   setStudentDetails('Happy Teacher DaY...!');
}

 return <>
       <Header/>
       <h1> Welcome to {studentDetails} </h1>
       <button className='btn btn-danger' onClick={clickMe}> clickMe </button>
    </>
}

export default Product;