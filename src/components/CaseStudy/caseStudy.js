import React, { Component } from 'react';
import './caseStudy.css'
import WeaponHolder from '../../images/weapon holder.svg';
import Slosh from '../../images/sloshcase.svg';
import Knowella from '../../images/Knowella.svg';
import Wakefit from '../../images/Wakefit.svg';
import EaseReach from '../../images/EaseReach.svg';
import ICCI from '../../images/ICCI.svg';
import {Link} from "react-router-dom";

class CaseStudy extends Component{
    constructor() {
        super(); 
        this.state = {
            data: [
                {
                   url: WeaponHolder,
                   projectName: "American Weapon Holder",
                   projectDetails: "Digital Commerce - Retail",
                },
                {
                   url: Slosh,
                   projectName: "Slosh",
                   projectDetails: "Mobile App - Digital Strategy",
                },
                {
                   url: Knowella,
                   projectName: "Knowella",
                   projectDetails: "Product Design",
                },
                {
                   url: Wakefit,
                   projectName: "Wakefit",
                   projectDetails: "UI Design - Retail",
                },
                {
                   url: EaseReach,
                   projectName: "EasyReach Underwear",
                   projectDetails: "3D Modelling - Healthcare",
                },
                {
                   url: ICCI,
                   projectName: "The Indian Chamber of Commerce",
                   projectDetails: "Website Design & Development - NGO",
                }
            ]
        } 
    }
   render() {
    return(
      <div className="casestudy-section">
        <div className="casestudy-content">From fresh startups <br/> to eminent brands, <br/> we’ve made a <br/> <span className="bold-content">significant difference</span></div>
        <div className='frame-content'>
            {this.state.data.map((item) => {
                return (
                      <div className='image-wrapper'>
                        <img src={item.url} alt='img'/>
                        <p className='title'>{item.projectName}</p>
                        <span className='sub-title'>{item.projectDetails}</span>
                      </div>                   
                ) 
            })}
            <div className='casestudy-button-wrapper'>
               <Link to="/casestudy">
                 <button className='casestudy-button'>See more Works</button>
               </Link>
            </div> 
        </div>
      </div>
    );
   }
}
export default CaseStudy;