
import {style} from './Gallery.module.scss';
import Header from '../../Components/Header';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {getImageDetails} from '../Service/api'

const Gallery=()=>{
   const[imageData,setImageData]=useState();
   const navigate = useNavigate();
   const location=useLocation();

   console.log(imageData,'imageData@@@####');

   useEffect(()=>{
         getImagesData();
         const urlPath=location.pathname;
         localStorage.setItem('redirecUrl',urlPath);
          console.log(urlPath,'urlPath@@###');
         },[]);

   const redirectPage=()=>{
         navigate("/addCandidate"); 
    }

 
     const getImagesData=async()=>{
       try{
        const response= await getImageDetails();
        //console.log(response,'Response Inside getImagesData@@##');
        if(response.status==200)
        {
           setImageData(response.data.photos);
        }
       }
       catch(error)
       {
        console.log(error);
       }}

    return <>
    <Header/>
      <h1> Welcome to Gallery Page </h1>
       <button className='btn btn-primary' onClick={()=>redirectPage()}>Add Candidate</button>
  <div className='container'>
              {imageData?.map((item,index)=>{
            return <div className="row" key={index}>
                <div className="col-md-12">
                    <div className='card w-100'>
                    <div className='card-body shadow text-white'>
                       <div className='pt-5 ps-5 pe-3 pb-5'>
                        <img src={item.url}></img>
                        </div>
                    </div>
                </div>
              
                </div>
           </div>
            })} 
                  
     </div>

    </>
}

export default Gallery;