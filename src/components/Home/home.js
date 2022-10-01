import React, { Component } from 'react';
import Header from '../Header/header';
import './home.css'
import Knowus from "../../images/knowus.svg";
import Scroll from "../../images/scroll.svg";
import CaseStudy from "../CaseStudy/caseStudy";
import ThingsWeDo from '../ThingsWeDo/things';
import OurAgency from '../OurAgency/ourAgency';
import Clients from '../Clients/clients';
import Stories from '../Stories/stories';
import Footer from '../Footer/footer';

class Home extends Component{
    render() {
        return(
            <div>
                <Header/>
                <div id='home' className="home-wrapper">
                  <div className="impactful-wrapper">
                    <div className="display-content">
                      <div className="impactful-content">We create <br/> Impactful <br/> Digital Experience</div>
                      <img className="knowus-imgcontent" src={Knowus} alt="Knowus" />
                    </div>
                    <div className="squarely-content">Squarely is a digital design agency disrupting the <br/> digital universe with sleek and smart interfaces.</div>   
                    <div className='project-button-wrapper'>
                       <button className='project-button'>Say Hello!</button>
                    </div>       
                  </div>  
                  <img className="scroll-imgcontent" src={Scroll} alt="Scroll" />         
                </div>
                <CaseStudy />
                <ThingsWeDo />
                <OurAgency />
                <Clients />
                <Stories />
                <Footer />
            </div>
        );
    }
}
export default Home;