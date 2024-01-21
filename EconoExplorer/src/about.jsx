import React from 'react'
import Header from './Header'
import'./about.css'

export default function About() {
  return (
  
    <div>
        <Header/>
        <div className="about-us-container">
      <header className="about-us-header">

        <h1>Our Story</h1>
        <p>Welcome to EconoExplorer, your passport to unparalleled affordability in global travel. At EconoExplorer, we understand that the joy of exploration should not come at an extravagant cost. Our journey began with a simple yet profound mission: to empower travelers
           worldwide with real-time information on the most budget-friendly countries, transcending the notion of affordable travel.</p>
      </header>
      
      <main className="about-us-main">
        <section className="about-us-section">
          <h2>Real-Time Insights Beyond Flights</h2>
          <p>EconoExplorer is more than just a ticketing platform. We provide comprehensive insights into the most economical countries to visit, offering a meticulous guide to budget-friendly accommodations, local attractions, and immersive experiences. Our commitment 
            goes beyond flights; we are your companions in discovering the hidden gems of affordability in every corner of the globe.</p>
        </section>
        
        <section className="about-us-section">
          <h2>Bridging Dreams and Affordability</h2>

            <p>At EconoExplorer, we believe that everyone deserves the chance to explore the world without financial constraints. Our platform is designed to bridge the gap between your dreams and affordability,
               making international travel an accessible reality for all. Join us in redefining the narrative of budget travel.</p>
       
          
               <h2>Your Passport to Affordable Adventures</h2>
           
            <p>Whether you're a seasoned traveler or embarking on your first international journey, EconoExplorer is your
               passport to affordable adventures. Our platform provides you with the tools to plan, explore, and savor the 
               most cost-effective destinations, ensuring that every mile traveled brings you closer to the richness of the
                world.</p>
          
        </section>
      </main>

      <footer className="about-us-footer">
        <h1>Contact us </h1>
        <p>For inquiries, suggestions, or to start your journey with EconoExplorer, feel free to reach out to us at   <a href="mailto:info@example.com">info@example.com</a></p>
        <p>EconoExplorer - Discover the World, Discover Affordability. Your adventure begins here.</p>
      </footer>
    </div>
    </div>
  )
}
