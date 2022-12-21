import React, { useState, useEffect } from 'react'
import './Weather.css';
import Button from 'react-bootstrap/Button';

// import ReactWeather, { useOpenWeather } from 'react-open-weather';
// import UseJoke from './UseJoke.js';

// import { env } from 'process';


// Setup an openweather account here 
// https://home.openweathermap.org/users/sign_in and use an API key in the following
const API_key = process.env.REACT_APP_MY_ENV_VARIABLE;
// console.log(process.env.REACT_APP_TEST)


function Weather() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [city, setCity] = useState('City');
  const [temperature, setTemperature] = useState('00')
  const [conditions, setConditions] = useState('Cond')
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    
    // console.log("Latitude is:", lat)
    // console.log("Longitude is:", long)
  }, [lat, long]);
  
  
  const weatherAPI =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_key}&units=metric`;

  console.log(weatherAPI);
  
  

// this works, just im poor
async function fetchWeather() {
  const response = await fetch(weatherAPI);
  const data = await response.json();  
  console.log(data['cod'])
  if (data['cod'] === 401) {
    setCity('Fredericton')
    setConditions('Overcast')
    setTemperature('-1')   
  } else {
    var celsius = '&8451;'
    setCity(data["name"]);
    setConditions(data["weather"][0]["main"]);
    setTemperature(data["main"]["temp"] + ' degrees celsius')
    // console.log(data)
    // console.log(data["weather"][0]["main"])
    // console.log(data["weather"][0]["main"])
  }
}


  function handleClick() {
    fetchWeather();  
    // console.log(process.env.REACT_APP_MY_ENV_VARIABLE)
  }
  
  return (
    <div>

      {/* <p>{weatherData["weather"]}</p> */}

      <div className='weather-card'>
        <h3 className='city'>{city}</h3>
        <div className='col'>

          <h4 className='temp'>{temperature}</h4>
          <h4 className='condition'>{conditions}</h4>
        </div>
      </div>



      <Button className='get-weather-btn' onClick={handleClick}>Get Weather</Button>
      {/* <button className='get-weather-btn' onClick={handleClick} >
        Get Weather!
      </button> */}





      {/* <h6>This is/was hooked up to <a href='https://openweathermap.org'>OpenWeathermap.org's</a> API, however I ran out of credits :( <br/> This will potentially be up again someday</h6> */}
      {/* <h1>Help me</h1> */}
      {/* <p>{weatherData}</p> */}
      {/* <UseJoke /> */}

    </div>
  );
};

export default Weather