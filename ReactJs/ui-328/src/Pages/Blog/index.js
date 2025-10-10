
import style from './Blog.module.scss';
import Header from '../../Components/Header';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Blog=()=>{

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
     <h1 className={style.textTitle}> This is the Blog Components</h1>
      <button className='btn btn-primary'  onClick={()=>redirectPage()}>Add Candidate</button>
    </>
}
export default Blog;