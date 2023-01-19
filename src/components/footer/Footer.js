import React from 'react'
import './Footer.css';
import { SocialIcon } from 'react-social-icons';


function Footer() {
  return (
    <div className='footer'>
        {/* <h2>Footer</h2> */}
            <h5>
              <a href='/contact' className='footer-link'>Reach out!</a>
            </h5>

        <p><a href="mailto:nahum.development@gmail.com">nahum.development@gmail.com</a></p>
        <div className='socials'>
          <SocialIcon className='social-btn grow' url="https://www.linkedin.com/in/nahum-collicott-594269200/"/>
          <SocialIcon className='social-btn grow' url="https://twitter.com/nahumcollicott" />
          <SocialIcon className='social-btn grow' url="https://github.com/nahummc" />
          


        </div>

       
        
    </div>
  )
}

export default Footer