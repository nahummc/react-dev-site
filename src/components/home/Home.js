import React from 'react'
import InfoCard from './infocard/InfoCard.js';
import ListedSkills from './etc/List.js';
// import Slides from './Slides.js';
import Image from 'react-bootstrap/Image'
import SlideButton from './etc/SlideButton.js';
import './Home.css';

function Home() {
  return (
    <div>
      {/* Cant figure out how to get this spacing without a br tag :( */}
       <br/>

        <InfoCard className='infocard' />
        <div className='aboutme'>

        
        {/* Carouselof photos of myself */}
        {/* <Slides /> */}

        <Image src={require("../../images/fish.jpg")} className="img-thumbnail"/>
        <SlideButton className="slide-btn" id="aboutme"/>
        </div>

      {/* Images of technologies I use/socail links? */}
        <div className='list-wrapper'>
          <ListedSkills className='list-group-item'/>
        </div>
        
        </div>
  )
}

export default Home