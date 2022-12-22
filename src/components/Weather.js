import React, { useState, useEffect } from 'react'
import './Weather.css';
import Button from 'react-bootstrap/Button';

// Setup an openweather account here 
// https://home.openweathermap.org/users/sign_in and use an API key in the following variable

// also allow the browswer to get your location data
const API_key = process.env.REACT_APP_MY_ENV_VARIABLE;

function Weather() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [city, setCity] = useState('City');
  const [temperature, setTemperature] = useState('Temperature')
  const [conditions, setConditions] = useState('Condition')
  
  function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      // console.log("Lat: " + lat);
      // console.log("Lat: " + long);
    })
  }

  useEffect(() => {
    getLocation();
  }, [lat, long]);
  
  const weatherAPI =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_key}&units=metric`;

  // console.log(weatherAPI);

// this works, just im poor
async function fetchWeather() {
  const response = await fetch(weatherAPI);
  const data = await response.json();  
  console.log(data['cod'])
  // if api is down/not working populate hard coded info
  if (data['cod'] === 401) {
    setCity('Fredericton')
    setConditions('Overcast')
    setTemperature('-1')   
  } else {
    // there must be a better way to parse response for the data
    setCity(data["name"]);
    setConditions(data["weather"][0]["main"]);
    setTemperature(data["main"]["temp"] + ' degrees celsius')
  }
}


  function handleClick() {
    fetchWeather();  
  }
  // I need to style the card better
  return (
    <div>
      <div className='weather-card'>
        <h3 className='city'>{city}</h3>
        <div className='col'>
          <h4 className='temp'>{temperature}</h4>
          <h4 className='condition'>{conditions}</h4>
        </div>
      </div>



      <Button className='get-weather-btn' onClick={handleClick}>Get Weather</Button>




{/* Ill uncomment this if i host this website and the API craps out on me */}
      {/* <h6>This is/was hooked up to <a href='https://openweathermap.org'>OpenWeathermap.org's</a> API, however I ran out of credits :( <br/> This will potentially be up again someday</h6> */}
    </div>
  );
};

export default Weather