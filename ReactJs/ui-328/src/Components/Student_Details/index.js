import { useEffect, useState } from "react";
import {studMoreDetails} from '../../Pages/Mockdata';
import Header from '../Header';
import { useNavigate } from "react-router-dom";
import {fetchUpdateStudentDetails} from '../../Pages/Service/api';

const Student_Details=()=>{

    const[studMoreDetails1,setStudMoreDetails1]=useState();
    const[studDetails,setStudeDetails]=useState();
    const[studId,setStudId]=useState();
    const navigate = useNavigate();

    console.log(studId,'studId@@###');
    
    useEffect(()=>{
      const stud_Id=JSON.parse(localStorage.getItem('stud_id')); 
      //setStudeDetails(stud_data);
      console.log(stud_Id,'get localstorage id');
      setStudId(stud_Id);
      //setStudMoreDetails1(studMoreDetails);
    },[]);

    useEffect(()=>{
      if(studId){
         updateStudentDetails(studId);
         console.log(studId,'studId Inside useeffect@####');
      }
      },[studId]);

    const redirectPage=()=>{
         navigate("/Product"); 
    }

    const updateStudentDetails=async(studId)=>{
      try{
       const response= await fetchUpdateStudentDetails(studId);
       console.log(response,'Response Inside fetchUpdateStudentDetails@@##');
       if(response.status==200)
       {
          setStudeDetails(response.data);
       }
      }
      catch(error)
      {
       console.log(error);
      }}

 return <>
 <Header/>
   <h1> Student Profile Page </h1>
     <div className='container'>
      <div className='card mt-4'>
        <div className='card-body'>
              <p>Id: {studDetails?.id}</p>
              <p>Title:{studDetails?.title} </p>
              <p>Description:{studDetails?.body} </p>
              {/* <p>Mobile:{studDetails.mob} </p> */}
              {/* <p>Gander:{studMoreDetails1[0].Gender} </p>
               <p>Blood Group:{studMoreDetails1[0].bgroup} </p>
              <p>Address: {studMoreDetails1[0].address}</p>
              <p>City: {studMoreDetails1[0].city}</p>
              <p>Landmark: {studMoreDetails1[0].landmark}</p>  */}
       </div>
       <button class='btn btn-primary' onClick={()=>redirectPage()}>Back</button>
        </div>   
        </div>
 </>


}

export default Student_Details;