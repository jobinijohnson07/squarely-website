import React, { Component } from 'react';
import './ourAgency.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Union from '../../images/union.svg';
import BorderAnimeButton from '../../shared/borderAnimeButton/borderAnimeButtom';

class OurAgency extends Component{
    render() {
      return(
       <div className="ourAgency-section">
          <h6><LazyLoadImage className="union-imgcontent" src={Union} alt="union" />Short Bio</h6>
          <div className="row">
            <div className="col-md-8">
              <h4>Refresh. Focus. Innovate.</h4>
              <p>Squarely is a team of young minds who <br/>comprehensively fabricates the Design into <br/>an exquisite User Experience(UX). We are <br/>cognizant of the customer's needs to <br/>Discover, Design and Develop exceptional <br/>user experiences.</p>
            </div> 
            <div className="col-md-4">
              <div className="valuecount-content">Design-led</div>
              <div className="details-content">Organisation</div>
              <div className="valuecount-content">20+</div>
              <div className="details-content">Years of Leadership</div>
              <div className="valuecount-content">F500</div>
              <div className="lastdetails-content">Working experience</div>
            </div>
          </div> 
          {/* <div className='about-button-wrapper'>
            <button className='about-button'>About Squarely</button>
            <BorderAnimeButton label="About Squarely" width="auto" class='about-button' />
          </div>  */}
       </div> 
      );  
    }
}
export default OurAgency; 