import React, { useState } from 'react'
import { useUser } from './UserContext';
import './signup.css'
import { IoEarthOutline } from "react-icons/io5";
import { IconBase } from 'react-icons/lib';
import { useNavigate } from 'react-router-dom';
import { GiPartyPopper } from "react-icons/gi";



export default function Signup() {

  const {arraydata , userType, setUserType,userInfo,setUserInfo } = useUser();

  const [userName,setusername]=useState('');
  const [newemail,setnewemail]=useState('');
  const[newPassword,setnewpassword]=useState('')
  const[country,setcountry]=useState();
  const[found,setfound]=useState(false);
  const[success,setsuccess]=useState(false);
  const[PassError,setpasswordError]=useState(false);
  const navigate = useNavigate();
  const iconStyle = {
    color: '#090929',
    fontSize: '300px',
    marginLeft: '350px',
    marginTop:'-100px' // Use marginLeft for horizontal positioning
  };

  async function addAccount(e){
    
    e.preventDefault();
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ ;


      if(  !passwordRegex.test(newPassword)){
        console.log('ggjg')
      setpasswordError (true)
      return
      }
      else {
        setpasswordError(false);
      }
    
   const userfound = arraydata.find((user) => {
      return user.Email === newemail && user.Password === newPassword;
    });

    if(!userfound){
      
      
      setfound(false);

    const newaccount={
      "Username": userName,
      "Email": newemail,
      "Password": newPassword,
      "Admin": false,
      "Country": country,
    }

    
    arraydata.push(newaccount);
    

    const response= await fetch('https://657ac47e1acd268f9afbe267.mockapi.io/users', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newaccount), // Send the entire data array as the updated data

      
    });
    if (!response.ok) {
      throw new Error('Failed to update data on the server');
    }

    setsuccess(true);
    setTimeout(() => {
      navigate('/')
    }, 3000);
 
   
  }
    else{
      setfound(true);
      
    }



}
  return (
  
    <div className='flexclas'>


    <div className='containersignup'>
        {!success &&<h1 className='create'>Create New Account</h1>}

    <form className='formsignup'  onSubmit={addAccount} > 

       {found && <h2 className='have-account'>this user alredy have account</h2>}

       {success && <h1 className='congrats'>Congrats you have created new account <GiPartyPopper /></h1>}

    <input type='username' className='inputbox' placeholder='UserName' onChange={e=>setusername(e.target.value)} required></input><br></br>
        <input type='email' className='inputbox' placeholder='Email Address'  onChange={e=>setnewemail(e.target.value)} required></input><br></br>
        
        <input type="password"  className='pass' id="pwd" name="pwd"placeholder='Password' onChange={e=>setnewpassword(e.target.value)}  required></input><br></br>
       {PassError && <p className='invalidpass'>*Invalid Password</p>}

        <select name="country" className="form-control" id="country" onChange={e=>setcountry(e.target.value)} required>
        <option label="Select a country ... " selected="selected">Select a country ... </option>

        <option value="Israel">Israel</option>
    <option value="Italy">Italy</option>
    <option value="Jamaica">Jamaica</option>
    <option value="Japan">Japan</option>
    <option value="Jersey">Jersey</option>
    <option value="Jordan">Jordan</option>
            </select> <br></br>
        <input type='submit'  className='sign' value={'SignUp'} ></input><br></br>
        <IoEarthOutline  style={iconStyle}/>
        
        
    </form>
    </div>
</div>
  )
}
