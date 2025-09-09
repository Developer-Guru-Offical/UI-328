
import {style} from './Product.module.scss';
import Header from '../../Components/Header';
import { useEffect, useState } from 'react';

const Product=()=>{

const studDetails=[
                  {'name':'Harsharda','email':'harshada@gmail.com','mob':'9837376736'},
                  {'name':'mayuri','email':'mayuri@gmail.com','mob':'9837376736'},
                  {'name':'samikasha','email':'samiksha@gmail.com','mob':'9837376736'},
                  {'name':'mayuri','email':'mayuri@gmail.com','mob':'9837376736'},
                  {'name':'sangita','email':'sangita@gmail.com','mob':'9837376736'},
                  {'name':'varsha','email':'varsha@gmail.com','mob':'9837376736'},
                  {'name':'Tejas','email':'Tejas@gmail.com','mob':'9837376736'},
                  {'name':'vaibhav','email':'vaibhav@gmail.com','mob':'9837376736'},
                 ];

const [studentDetails,setStudentDetails]=useState(studDetails);

console.log(studentDetails,'studentDetails@@##');
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
       <h1> Student Details </h1>
       <div className='container'>
      {studentDetails.map((item,index)=>{
       return <div className='card mt-4'>
        <div className='card-body' key={index}>
              <p>Name:{item.name} </p>
              <p>Email:{item.email} </p>
              <p>Mobile:{item.mob} </p>
         </div>
        </div>   
       })}
      </div>
       {/* <button className='btn btn-danger' onClick={clickMe}> clickMe </button> */}
    </>
}

export default Product;