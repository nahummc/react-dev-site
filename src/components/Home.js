import React from 'react'
import InfoCard from './InfoCard.js';
import ListedSkills from './List.js';
// import Slides from './Slides.js';
import Image from 'react-bootstrap/Image'
import SlideButton from './SlideButton.js';
import './Home.css';


function Home() {
  return (
    <div>
       <br/>

        <InfoCard />

        <br></br>
        <br></br>
        {/* Carouselof photos of myself */}
        {/* <Slides /> */}
        <div className='aboutme'>

        <Image src={require("../images/fish.jpg")} className="img-thumbnail"/>
        <SlideButton className="slide-btn" id="aboutme"/>
        </div>

      {/* Images of technologies I use/socail links? */}

        <ListedSkills />
        
        </div>
  )
}

export default Home