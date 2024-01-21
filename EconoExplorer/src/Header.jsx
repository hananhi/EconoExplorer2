import React, { useEffect } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import './header.css'
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import {toast , ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GiCommercialAirplane } from "react-icons/gi";

export default function Header() {
  const {arraydata , userType, setUserType,userInfo,setUserInfo} = useUser();
    useEffect(() => {
      const storedUser1 = localStorage.getItem('user');
      const storedCountry = localStorage.getItem('country');

      const storedAdmin1 = localStorage.getItem('isAdmin');
  
      if (storedUser1) {
        setUserInfo({ username: storedUser1, country: storedCountry });
      }

      if (storedAdmin1) {
        setUserType(JSON.parse(storedAdmin1));
      }
    }, []);

  // const {userInfo ,userType} = useUser();
  const navigate = useNavigate();


  function displayNotify(){
    toast.success('New Country Added successfully' , {
      position:toast.POSITION.BOTTOM_RIGHT
    })

  }

  function returnhome(){
    navigate('/Home')
     }

  function go_profile(){
    navigate('Profile')
  }   
  function go_admin(){
    navigate('Admin')
  }
  function go_about(){
    navigate('About')
  }

  function returnlogin(){
    
    localStorage.removeItem("user");
    localStorage.removeItem("country");
    localStorage.removeItem("isAdmin");

    console.log(userInfo);
 navigate('/')
  }

  return (
    <div>
        <div className='all-header'>
        <div className='leftsidehome'> <GiCommercialAirplane color='#090929' />EconoExplorer.com</div>
        <div className='rightside'>
            
            <div onClick={returnhome}>Home</div>
           <div onClick={go_about}>About us </div>
            <div className='user-info-container'>
            <div><CgProfile/> {userInfo.username}  </div>

            {userType && (
        <div className="dropdown-content">
          <button onClick={returnlogin}>log out</button> 
          <button onClick={go_profile}>profile</button>
          <button onClick={go_admin} >Admin</button>
        </div>
      )}

      {!userType && (
        <div className="dropdown-content">
          <button onClick={returnlogin}>log out</button>
          <button onClick={go_profile}>Profile</button>
        </div>
      )}
         </div>   
        </div>
        </div>
        
        <div><ToastContainer/></div>
    </div>
  )
}
