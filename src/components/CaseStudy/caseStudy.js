import React, { Component } from 'react';
import './caseStudy.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import WeaponHolder from '../../images/weapoweb.webp';
import Slosh from '../../images/sloshweb.webp';
import Knowella from '../../images/Knowellaweb.webp';
import Wakefit from '../../images/wakefitweb.webp';
import EaseReach from '../../images/easeweb.webp';
import ICCI from '../../images/ICCI.svg';
import {Link} from "react-router-dom";
import BorderAnimeButton from '../../shared/borderAnimeButton/borderAnimeButtom';
 
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
        <h3>From fresh startups to <br/> renowed brands, <br/> we’ve made a <br/> <span className="bold-content">significant difference</span></h3>
        <div className='frame-content'>
            {this.state.data.map((item) => {
                return (
                      <div className='image-wrapper'>
                        <div className="overflow-content">
                          <LazyLoadImage className="case-imgcontent" src={item.url} alt='img'/>
                        </div>
                        <h6 className='title'>{item.projectName}</h6>
                        <span className='sub-title'>{item.projectDetails}</span>
                      </div>                   
                )  
            })}
            <div className='casestudy-button-wrapper'>
               <Link to="/casestudy">
                 {/* <button className='casestudy-button'>See more Works</button> */}
                  <BorderAnimeButton 
                     label="See more Works" 
                     width="auto" 
                     class='casestudy-button' 
                     dotColor='black'
                     color= '#fffffF' 
                  />
               </Link>
            </div> 
        </div>
      </div>
    );
   }
}
export default CaseStudy;