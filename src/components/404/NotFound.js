import React from 'react'
import { Link } from "react-router-dom";
import './NotFound.css';


function NotFound() {  
  return (
<div>
    <div className='wrapper'>

        <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <li>
                <ul>
                    <Link to='/'>Home</Link>
                </ul>
                <ul>
                    <Link to='/contact'>Contact</Link>
                </ul>
                <ul>
                    <Link to='/weather'>Weather</Link>
                </ul>
                <ul>
                    <Link to='/todo'>Todo</Link>
                </ul>
                <ul>
                    <Link to='/calc'>Calculator</Link>
                </ul>
            </li>
        </div>
    </div>
  )
}


export default NotFound