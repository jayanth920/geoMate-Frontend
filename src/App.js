import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [locations, setLocations] = useState([]);

  const fetchLocations = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_BACKEND_URI);
      console.log(response.data)
      setLocations(response.data.reverse());
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };


  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Fetched Locations</h1>
      <button onClick={fetchLocations} style={{ marginBottom: '10px', width:"200px", height:"50px" }}>
        Refresh Locations
      </button>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {locations.length > 0 ? (
          locations.map((loc, index) => (
            <div key={index} style={{ background: "black", color: "white", marginTop: "20px", marginBottom: "20px" }}>
              <li>CCode <b>{loc.country_code}</b></li>
              <li>Country <b>{loc.country}</b></li>
              <li>State <b>{loc.state}</b></li>
              <li>District <b>{loc.state_district}</b></li>
              <li>Village <b>{loc.village}</b></li>
              <li>Latitude <b>{loc.latitude}</b></li>
              <li>Longitude <b>{loc.longitude}</b></li>
              <li>MapLink <a target="_blank" style={{color:"white"}} href={`https://www.google.com/maps/place/${loc.latitude},${loc.longitude}`}><b>MAPS</b></a></li>
              <li>Tips <a target="_blank" style={{color:"white"}} href={`https://www.plonkit.net/${loc.country.toLowerCase()}`}><b>TIPS</b></a></li>
            </div>
          ))
        ) : (
          <li>No locations available.</li>
        )}
      </ul>
    </div>
  );
}

export default App;
