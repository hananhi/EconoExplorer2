import React, { useState } from 'react'
import Header from './Header'
import { useUser } from './UserContext';
import { useTrips } from './UserContext2';
import './trips.css'
import { useLocation } from "react-router-dom";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md"
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";


export default function Trips() {


    const {userInfo , userType} = useUser();
    const location = useLocation();
    //const navigate = useNavigate();
    const {tripData,settripdata}=useTrips();
    const currentCountry = location.state && location.state.currentcountry;
  
    const styleswitch={
      color:'#191970',
      position:'absolute',
      fontSize: '40px',
      marginLeft: '180px',
      top: '30px',
    background: '#fff',
    zIndex: '2'
     
    }

    const [addBTN, setAddBTN] = useState(false);
  const [IDtrip, setIDtrip] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [departureHour, setDepartureHour] = useState('');
  const [arrivalHour, setArrivalHour] = useState('');
  const [flightCompany, setFlightCompany] = useState('');
  const [airport, setAirport] = useState('');
  const [costAbility, setCostAbility] = useState('');


const set=function(e){
  setAddBTN('true')
  console.log(e.target.value)
  
}

    const handleIDtripChange = function (e) {
      setIDtrip(e.target.value);
    };
  
    const handlePriceChange = function (e) {
      setPrice(e.target.value);
    };
  
    const handleDateChange = function (e) {
      setDate(e.target.value);
    };
  
    const handleDepartureHourChange = function (e) {
      setDepartureHour(e.target.value);
    };
  
    const handleArrivalHourChange = function (e) {
      setArrivalHour(e.target.value);
    };
  
    const handleFlightCompanyChange = function (e) {
      setFlightCompany(e.target.value);
    };
  
    const handleAirportChange = function (e) {
      setAirport(e.target.value);
    };
  
    const handleCostAbilityChange = function (e) {
      setCostAbility(e.target.value);
    };

    function displayNotify(){
      toast.success('New Country Added successfully' , {
        position:toast.POSITION.BOTTOM_RIGHT
      })
    }  

  
    async function fetchData() {
  
      const response = await fetch('https://657ac47e1acd268f9afbe267.mockapi.io/Trips');
      const data = await response.json();
      settripdata(data);
    }

 async function Deletetrip(currenttrip){

  const response = await fetch(`https://657ac47e1acd268f9afbe267.mockapi.io/Trips/${currentCountry.id}`);
  const trip_every_country = await response.json();

  const updatedTrips = trip_every_country.trips.filter(trip => trip.id !== currenttrip);
  trip_every_country.trips=updatedTrips;
  console.log(updatedTrips)

  const updateResponse = await fetch(`https://657ac47e1acd268f9afbe267.mockapi.io/Trips/${currentCountry.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(trip_every_country),
  });

  

  fetchData();
  
  }

  function handleBackAddTrip(){
    setAddBTN(false)
   
   }
  
 /*
  async function addtrip(){

    const response = await fetch(`https://657ac47e1acd268f9afbe267.mockapi.io/Trips/${currentCountry.id}`);
  const trip_every_country = await response.json();

  const new_trip={
                "id": IDtrip,
                "price": price,
        "date": date,
        "departureHour": departureHour,
        "arrivalHour": ArrivalHour,
        "returnDate": "2023-01-10",
        "returnHour": "12:00",
        "flightCompany": flightcompany,
        "airport": Airport
         } 

  trip_every_country.trips.push(new_trip);
  console.log(updatedTrips)

  const updateResponse = await fetch(`https://657ac47e1acd268f9afbe267.mockapi.io/Trips/${currentCountry.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(trip_every_country),
  });
*/


  
  return (
    <div><Header/>
    <div className='trip-country'>
        <div className='container-from-to'>
         <div className='borderbox'> 
          <p className='from'>from</p>
          <h2 className='fromcontry'>{userInfo.country}</h2>
         </div>
          <MdOutlineSwapHorizontalCircle  style={styleswitch} />
         <div className='borderbox'>
          <p className='from'>To</p>
           <h2 className='fromcontry'>{currentCountry.countryName}</h2>
         </div>
 
        </div>
<button onClick={set} value={addBTN} className='addtiket'>Add Trip</button>

        <div className='container-ticket'>
          
        {tripData.map((e, index) =>
  e.countryName === currentCountry.countryName ? (
    <div key={index} className='ticket'>
      {e.trips.map((trip, tripIndex) => (
        <div key={tripIndex}className='ticketdetails'>
          <div className='ticketdetals2'>
           <img src={trip.flightCompany} className='companyimg'></img>
           <div className='outbound'>Outbound Date
            <div>{trip.date}</div>
            </div>
           
            <div>Depart
            <div>{trip.departureHour}</div>
            </div>

            <div>Arrival
            <div>{trip.arrivalHour}</div>
            </div>
            
            <div className='airport'>{trip.airport}</div>
            <div>Return Date
 <div>{trip.returnDate}</div>
 </div>

<div> Return Hour
            <div>{trip.returnHour}</div>
            </div>

            <div>{trip.price}</div>
            {trip.Costabbility ? (
    <span style={{ color: 'rgb(233, 92, 92)' , fontWeight:'bold'}}> <FaCircleArrowUp />Cost</span>
  ) : (
    <span style={{ color: 'green',fontWeight:'bold' }}> <FaCircleArrowDown />Cost</span>
    
  )}


          </div>

          <button className='addBTN'>Add to <IoCartOutline /></button>
         { userType && <button onClick={()=>Deletetrip(trip.id)} className='deleteBTN'>-</button>}
        
        </div>
      ))}</div> ) : null
  
)}

        </div>
    </div>

 <div className='addtripform'>

  
{addBTN && <form >
    <h1 className='trip-title'>Add Trip</h1>

<label>ID trip :</label>
<input type='number' onChange={handleIDtripChange} value={IDtrip} required /><br></br>

<label>price :</label>
<input type='number' onChange={handlePriceChange} value={price} required /><br></br>
<label>Date :</label>
            <input type='date' onChange={handleDateChange} value={date} required /><br></br>

            <label>Departure Hour :</label>
            <input type='time' onChange={handleDepartureHourChange} value={departureHour} required /><br></br>

            <label>Arrival Hour :</label>
            <input type='time' onChange={handleArrivalHourChange} value={arrivalHour} required /><br></br>

            <label>Flight Company :</label>
            <input type='url' onChange={handleFlightCompanyChange} value={flightCompany} required /><br></br>

            <label>Airport :</label>
            <input type='text' onChange={handleAirportChange} value={airport} required /><br></br>

            <label>Cost Ability :</label>
            <input type='bool' onChange={handleCostAbilityChange} value={costAbility} /><br></br>
<button className='addBTN' onClick={displayNotify}>ADD</button>
<button onClick={handleBackAddTrip}>Back</button>

</form>
}
</div>

</div>
   
 )
}
