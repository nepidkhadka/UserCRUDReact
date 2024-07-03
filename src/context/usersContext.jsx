import { createContext, useEffect, useState } from "react";

const usersContext = createContext();

export const UsersProvider = ({children}) => {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  useEffect(()=>{
    localStorage.setItem("users", JSON.stringify(users));
  },[users])

  return (
    <usersContext.Provider value={{ users, setUsers }}>
      {children}
    </usersContext.Provider>
  );
};

export default usersContext
