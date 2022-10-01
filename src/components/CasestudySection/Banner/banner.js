import React, { Component } from 'react';
import './banner.css'

class Banner extends Component{
    render() {
      return(
        <div>
          <div id='home' className="home-wrapper">
            <div className="impactful-wrapper">
              <div className="display-content">
                <div className="impactful-content">We make <br/> unforgettable <br/>  digital experiences</div>
                  {/* <img className="knowus-imgcontent" src={Knowus} alt="Knowus" /> */}
                </div>
                <div className="squarely-content">Squarely is a digital design agency that develops <br/> strategic vision and products through cultural insight <br/> and emotion.</div>         
              </div>  
              {/* <img className="scroll-imgcontent" src={Scroll} alt="Scroll" />          */}
          </div>
        </div>
      );
    }
}
export default Banner;
        