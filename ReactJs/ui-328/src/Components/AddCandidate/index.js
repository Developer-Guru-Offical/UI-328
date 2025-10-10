import Header from "../Header";
import { useNavigate } from "react-router-dom";

const AddCandidate=()=>{
     const navigate = useNavigate();

    const redirectPage=()=>{
        const navigationUrl=localStorage.getItem('redirecUrl');
         navigate(navigationUrl); 
      
    }

return <>
    <Header/>
   <p> Please Add Your candidate Here</p>
   <button className="btn btn-primary" onClick={()=>redirectPage()}>Back</button>&nbsp;&nbsp;&nbsp;
   <button className='btn btn-danger'>Continue</button>
</>



}

export default AddCandidate;