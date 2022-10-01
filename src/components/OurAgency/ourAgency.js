import React, { Component } from 'react';
import './ourAgency.css'
import Union from '../../images/union.svg';

class OurAgency extends Component{
    render() {
      return(
       <div className="ourAgency-section">
          <div className="agency-content"><img className="union-imgcontent" src={Union} alt="union" />Our Agency</div>
          <div className="row">
            <div className="col-md-8">
              <p className="service-content">As a full-service UI/UX design agency, we are cognizant about our client needs to discover, design and develop <span className="bold-content">phenomenal user experiences</span></p>
            </div>
            <div className="col-md-4">
              <div className="valuecount-content">Design-led</div>
              <div className="details-content">Organisation</div>
              <div className="valuecount-content">Fortune 500</div>
              <div className="details-content">Working experience with</div>
              <div className="valuecount-content">20+</div>
              <div className="details-content">Years of Leadership</div>
            </div>
          </div>
          <div className='about-button-wrapper'>
            <button className='about-button'>About Squarely</button>
          </div> 
       </div> 
      );
    }
}
export default OurAgency;