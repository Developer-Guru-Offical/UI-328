import axios from "axios";

export const fetchStudentDetails=async()=>{
       return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => { 
            return response.json().then((data) => {
                const status = response.status;
                return {status,data};
            }).catch((err) => {
                console.log(err);
            }) 
        });
    
}

export const fetchUpdateStudentDetails=async(studId)=>{
       return fetch('https://jsonplaceholder.typicode.com/posts/'+ studId)
        .then((response) => { 
            return response.json().then((data) => {
                const status = response.status;
                return {status,data};
            }).catch((err) => {
                console.log(err);
            }) 
        });
    
}

export const getImageDetails=async()=> {
  try {
    const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos');
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}