

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