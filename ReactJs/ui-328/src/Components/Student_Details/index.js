


const Student_Details=()=>{

  const s_id=localStorage.getItem('stud_id');   

 return <>
   <h1> This is the Student_ Details Page </h1>
   <p> StudentID:{s_id}</p>
 </>


}

export default Student_Details;