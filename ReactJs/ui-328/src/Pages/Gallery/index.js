
import {style} from './Gallery.module.scss';
import Header from '../../Components/Header';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Gallery=()=>{
   const navigate = useNavigate();
   const location=useLocation();

   useEffect(()=>{
         const urlPath=location.pathname;
         localStorage.setItem('redirecUrl',urlPath);
          console.log(urlPath,'urlPath@@###');
         },[]);

   const redirectPage=()=>{
         navigate("/addCandidate"); 
    }

    return <>
    <Header/>
      <h1> Welcome to Gallery Page </h1>
       <button className='btn btn-primary' onClick={()=>redirectPage()}>Add Candidate</button>
    </>
}

export default Gallery;