import React, { Component } from 'react';
import Header from '../Header/header';
import './home.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Knowus from '../../images/knowus.svg';
import Video from '../../images/video.svg'
import Scroll from '../../images/scroll.svg';
import CaseStudy from '../CaseStudy/caseStudy';
import ThingsWeDo from '../ThingsWeDo/things';
import OurAgency from '../OurAgency/ourAgency';
import WeStand from '../WeStand/weStand';
import Clients from '../Clients/clients';
import Industries from '../Industries/industries';
import Stories from '../Stories/stories';
import Footer from '../Footer/footer';
import {Link} from "react-router-dom";
import BorderAnimeButton from '../../shared/borderAnimeButton/borderAnimeButtom';

class Home extends Component{
    render() { 
        return(
            <div>  
                <Header/>
                <div id='home' className="home-wrapper">
                  <div className="impactful-wrapper">
                    <div className="row display-content"> 
                      <div className="col-md-8 col-7">
                        <h1 className="impactfuls-content">We create an<br/> Impactful <br/> Digital Experience!</h1>
                      </div>
                      <div className="col-md-4 col-5 video-content">
                        <div className='circle-wrapper'>
                          <div id="circle">
                            <svg version="1.1" x="0px" y="0px" width="300px" height="250px" viewBox="0 0 300 300">
                              <defs>
                                <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                              </defs>
                              <circle cx="150" cy="100" r="75" fill="none"/>
                              <g>
                                <use href="#circlePath" fill="none"/>
                                <text fill="#000">
                                  <textPath href="#circlePath">Get to know us in 45 secs</textPath>
                                  
                                </text> 
                              </g>
                            </svg>
                          </div>
                          <img className="video-imgcontent" src={Video} alt="Video" />
                        </div>
                      </div>
                     
                      
                      {/* <LazyLoadImage className="knowus-imgcontent" src={Knowus} alt="Knowus" /> */}
                      {/* <div id="container"> */}

{/* </div> */}
                    </div>
                    <p>Squarely is a <span className="bold-content">digital design agency</span> that provides a strategic vision and futuristic design solutions through cultural insights and emotions.</p>   
                    <div className="row-content">
                      <div className='projects-button-wrapper'>
                        <Link to="/casestudy">
                          <BorderAnimeButton 
                            label="View our Works" 
                            width="auto"  
                            class='projects-button'  
                            dotColor='white'
                            color= 'black'  
                          />
                        </Link>
                      </div>   
                      <div className="ourprocess-content">Know our Process</div> 
                    </div>    
                  </div>  
                  <LazyLoadImage className="scroll-imgcontent" src={Scroll} alt="Scroll" />         
                </div>
                <CaseStudy />
                <div className="thingswedo-wholesection">
                  <ThingsWeDo />
                </div>
                <div className="agency-wholesection"> 
                  <OurAgency />
                </div>
                <div className="westand-wholesection">
                  <WeStand />
                </div> 
                <div className="clients-wholesection">
                  <Clients />
                </div>
                <div className="industries-wholesection">
                  <Industries />
                </div>
                <div className="stories-wholesection">
                  <Stories />
                </div>
                <div className="footer-wholesection">
                  <Footer />
                </div>
                
            </div>
        );
    }
}
export default Home;