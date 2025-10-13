import React, { useState } from "react"; //
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const userDetails={
      name:'Developer Guru',
      orgId:91,
      clinetName:'jack'
  }
  const [user, setUser] = useState(userDetails);

//   const changeUser = (newName) => {
//     setUser(newName);
//   };

  return (
    <MyContext.Provider value={{ user }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;