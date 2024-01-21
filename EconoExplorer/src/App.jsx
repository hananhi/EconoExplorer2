import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { UserProvider } from './UserContext'
import Login from './Login'
import Signup from './Signup';
import Home from './Home';
import Trips from './Trips';
import Profile from './Profile';
import { TripProvider } from './UserContext2'
import Admin from './Admin';
import About from './About';



function App() {


  return (
   
      <div>
        <UserProvider>
        <TripProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='Home' element={<Home/>} />
          <Route path='SignUp' element={<Signup />}/>
          <Route path='/Home/Trips' element={<Trips/>}/>
          <Route path='/Home/Profile' element={<Profile/>} />
          <Route path='/Home/Admin' element={<Admin/>} />
          <Route path='/Home/About' element={<About/>} />
          
          
        </Routes>
        </BrowserRouter>
        </TripProvider>
        </UserProvider>
      
      </div>
      
  )
}

export default App
