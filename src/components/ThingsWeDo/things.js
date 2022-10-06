import React, { Component } from 'react';
import './things.scss'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Union from '../../images/union.svg';
import Strategy from '../../images/strategy.svg';
import Expdesign from '../../images/expdesign.svg';
import Webdesign from '../../images/produdesign.svg';
import Development from '../../images/rapidprototyping.svg';
import Immersive from '../../images/uxui.svg';
import BorderAnimeButton from '../../shared/borderAnimeButton/borderAnimeButtom';

class ThingsWeDo extends Component{
    render() { 
      return(
        <div className="things-section">
           <div className="thingssec-content">
           <h6><LazyLoadImage className="union-imgcontent" src={Union} alt="union" />Things we do well</h6>
           <h4>From ideation to launch, <br/> we <span className="bold-content">concord</span> your needs <br/> at <span className="bold-content">every stage!</span></h4>
           <div className="icons-section">
             <div className="row whole-content">
               <div className='col firstrow-content'>
                 <LazyLoadImage className="strategy-imgcontent" src={Strategy} alt="strategy" />
                 <h5>Digital Strategy</h5>
                 <p>We create an action plan on <br/> executing a holistic brand and <br/> user experience.</p>
               </div>
               <div className='col firstrow-content'>
                 <LazyLoadImage className="strategy-imgcontent" src={Expdesign} alt="strategy" />
                 <h5>Experience Design</h5>
                 <p>We create an action plan on <br/> executing a holistic brand and <br/> user experience.</p>
               </div>
             </div> 
           </div> 
           <div className="icons-section">
             <div className="row whole-content">
               <div className='col firstrow-content'>
                 <LazyLoadImage className="strategy-imgcontent" src={Webdesign} alt="strategy" />
                 <h5>Product Design</h5>
                 <p>We create an action plan on <br/> executing a holistic brand and <br/> user experience.</p>
               </div>
               <div className='col firstrow-content'>
                 <LazyLoadImage className="strategy-imgcontent" src={Development} alt="strategy" />
                 <h5>Rapid Prototyping</h5>
                 <p>We create an action plan on <br/> executing a holistic brand and <br/> user experience.</p>
               </div>
             </div>
           </div>
           <div className="icons-section">
             <div className="row lastwhole-content">
               <div className='col firstrow-content'>
                 <LazyLoadImage className="strategy-imgcontent" src={Immersive} alt="strategy" />
                 <h5>UX/UI Design</h5>
                 <p>We create an action plan on <br/> executing a holistic brand and <br/> user experience.</p>
               </div>
               <div className='col firstrow-content'>
                 <LazyLoadImage className="strategy-imgcontent" src={Immersive} alt="strategy" />
                 <h5>Ecommerce</h5>
                 <p>We create an action plan on <br/> executing a holistic brand and <br/> user experience.</p>
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