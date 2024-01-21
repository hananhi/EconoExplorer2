import React, { createContext, useContext, useState } from 'react';
import  { useEffect} from 'react'

const UserContext = createContext();

export function UserProvider({ children }) { 

    const[arraydata,setarraydata]=useState([])
 const [userType, setUserType] = useState(false);
 const [userInfo, setUserInfo] = useState({ index: -1, username: '', country:''});

const [currentPage, setCurrentPage] = useState('Login');



  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://657ac47e1acd268f9afbe267.mockapi.io/users');
        const data = await response.json();
        setarraydata(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);


return (
  <UserContext.Provider value={{ arraydata , userType, setUserType,userInfo,setUserInfo,currentPage,setCurrentPage, setarraydata}}>
    {children}
  </UserContext.Provider>
);
}

export function useUser() {

return useContext(UserContext);
}