import React, {  useEffect, useState } from 'react'
import { useUser } from './UserContext';
import SyncLoader from 'react-spinners/SyncLoader';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GiCommercialAirplane } from "react-icons/gi";

import './login.css'

export default function Login() {

    const {arraydata , userType, setUserType,userInfo,setUserInfo} = useUser();

    const [close,setclose]=useState(false);

    const [email,setemail]=useState('');
    const[Password,setpassword]=useState('')
   const [loading, setLoading] = useState(false);
  

   const navigate = useNavigate();

    console.log(userInfo);
   

  
        function validation(e){
            e.preventDefault();


              setLoading(true);

            
             setTimeout(() => {
             
              
              const foundUser = arraydata.find((user) => {
              
                return user.Email === email && user.Password === Password ;         
                 
              });
             
                if (foundUser) {
                  setUserInfo({ index: arraydata.indexOf(foundUser), username: foundUser.Username ,country:foundUser.Country});
                 setUserType(foundUser.Admin);
            

                  localStorage.setItem("user",foundUser.Username)
                  localStorage.setItem("country",foundUser.Country)
                  localStorage.setItem("isAdmin",JSON.stringify(foundUser.Admin))

                  console.log(userInfo);
          
                 navigate('Home' )
                } else {                  
                  setUserInfo({ index: -1, username: '',country:''});
                  setclose(true);
                  setLoading(false);

                }
              

             }, 2000); 
          }

  return (
    <div >
 
<h1 className='title1'> <GiCommercialAirplane color='#ffc40c' size='100px' /> Travel Time !</h1>
        <div className='allcontainer' >

        <img src='women.jpg' className='rightimg'></img>
        
        <div className='leftside'>
            <h1 className='welcome'>Welcome</h1>
        <form className='formlogin'  onSubmit={validation}> 
           
    
            <input type='email' className='inputbox' placeholder='Email Address' value={email}  onChange={e=>setemail(e.target.value)} required></input><br></br>
            
            <input type="password"  className='inputbox 'id="pwd" name="pwd"placeholder='Password' value={Password} onChange={e=>setpassword(e.target.value)} required></input><br></br>

            {close && <div className='errormsg'>Incorrect Email or Password</div>}
            
            {/* <input type='submit' className='submit' value={loading ? <SyncLoader/> : 'LOGIN'} /> */}
            <button className='submit'>
              {loading? <SyncLoader color='#191970' size={5}/> : 'LOGIN'}
              </button><br></br>
            <span>Don't have account ?</span><a href={'/signUp'}> Register Now</a>
        </form>
        </div>
    </div>
   
   
        </div>




  )
  }
