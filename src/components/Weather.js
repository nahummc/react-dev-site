import React, { useState, useEffect } from 'react'
import ReactWeather, { useOpenWeather } from 'react-open-weather';
// import axios from 'axios';


function Weather() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, [lat, long]);




  
  return (
    <div>
      <h1>Help me</h1>


    </div>
  );
};

export default Weather;