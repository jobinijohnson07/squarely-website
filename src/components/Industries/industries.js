import React, { Component } from 'react';
import './industries.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Union from '../../images/union.svg';

class ThingsWeDo extends Component{
    render() { 
      return(
        <div className="industries-section">
           <div className="thingssec-content">
           <h6><LazyLoadImage className="union-imgcontent" src={Union} alt="union" />Industires</h6>
           <h4>World-class design at <span className="bold-content">speed & scale</span></h4>
           <div className="icons-section">
             <div className="row wholes-content">
               <div className='col firstrow-content'>
                 <h5>Retail</h5>
                 <p>We create an action plan on <br/> executing a holistic brand and <br/> user experience.</p>
               </div>
               <div className='col firstrow-content'>
                 <h5>Healthcare</h5>
                 <p>We create an action plan on <br/> executing a holistic brand and <br/> user experience.</p>
               </div>
             </div> 
           </div> 
           <div className="icons-section">
             <div className="row wholes-content">
               <div className='col firstrow-content'>
                 <h5>Manufacturing</h5>
                 <p>We create an action plan on <br/> executing a holistic brand and <br/> user experience.</p>
               </div>
               <div className='col firstrow-content'>
                 <h5>Fintech</h5>
                 <p>We create an action plan on <br/> executing a holistic brand and <br/> user experience.</p>
               </div>
             </div>
           </div>
           <div className="icons-section">
             <div className="row wholeslast-content">
               <div className='col lastrows-content'>
                 <h5>Education</h5>
                 <p>We create an action plan on <br/> executing a holistic brand and <br/> user experience.</p>
               </div>
               <div className='col-1 firstrow-content'>
                 {/* <h5>Ecommerce</h5>
                 <p>We create an action plan on <br/> executing a holistic brand and <br/> user experience.</p> */}
               </div>
             </div>
           </div>  
           {/* <div className='things-button-wrapper'>
             <button className='things-button'>Learn More</button>
             <BorderAnimeButton 
               label="Learn More" 
               width="auto"  
               dotColor='#3FC5B3'
               class='things-button'
             />
           </div> */}
           
           </div>
        </div> 
         
      );
    }
}
export default ThingsWeDo;