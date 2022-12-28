import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
        {/* <h2>Footer</h2> */}
            <h5>
              <a href='/contact' className='footer-link'>Contact me</a>
            </h5>
            <br/>

        <p>The form submission is a work in progress, so in the mean time, use <a href="mailto:nahum.development@gmail.com">this link</a> or the email below to get ahold of me!</p>
        <p>nahum.development@gmail.com</p>
    </div>
  )
}

export default Footer