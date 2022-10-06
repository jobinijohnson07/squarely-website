import React, { Component } from 'react';
import './clients.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Union from '../../images/union.svg';
import KnowIcon from '../../images/knownew.svg';
import WakefitIcon from '../../images/wake.svg';
import BloodBrothersIcon from '../../images/bloodbr.svg';
import WeaponIcon from '../../images/weapo.svg';
import IgdIcon from '../../images/igd.svg';
import SiruthuliIcon from '../../images/siru.svg';
import ZimzeeIcon from '../../images/zimzee.svg';
import ICCIIcon from '../../images/ICCIC.svg';
import Ausha from '../../images/ausha.svg';

class Clients extends Component{
    render() { 
      return( 
        <div className="clients-section">
          <div className="clientsec-content">
            <h6><LazyLoadImage className="union-imgcontent" src={Union} alt="union" />Recent Clients</h6>
            <div className="row">
              <div className="col-md-8">
                <p className="clientservice-content">World-class design at <br/><span className="bold-content">speed & scale</span></p>
                <p className="reality-content">Bringing that seed of a thought to reality <br/>through scalable, sustainable and futuristic <br/>design solutions.</p>
              </div>
              <div className="col-md-4 secondrow-desktop">
                <div className="valuecount-content">7 Countries</div>
                <div className="details-content">Served Globally</div>
                <div className="valuecount-content">50+</div>
                <div className="details-content">Happy Clients</div>
              </div>
            </div>
            <div className="row"> 
              <div className="col-md-3">
               <LazyLoadImage className="clientsicon-imgcontent" src={WeaponIcon} alt="KnowIcon" />
              </div>
              <div className="col-md-3">
                <LazyLoadImage className="clientsicon-imgcontent" src={KnowIcon} alt="KnowIcon" />
              </div>
              <div className="col-md-3">
                <LazyLoadImage className="clientsicon-imgcontent" src={BloodBrothersIcon} alt="KnowIcon" />
              </div>
              <div className="col-md-3">
                <LazyLoadImage className="clientsicon-imgcontent" src={IgdIcon} alt="KnowIcon" />
              </div>
            </div>
            <div className="row secondrow-client">
              <div className="col-md-3">
                <LazyLoadImage className="clientsicon-imgcontent" src={WakefitIcon} alt="KnowIcon" />
              </div>
              <div className="col-md-3">
                <LazyLoadImage className="clientsicon-imgcontent" src={SiruthuliIcon} alt="KnowIcon" />
              </div>
              <div className="col-md-3">
                <LazyLoadImage className="clientsicon-imgcontent" src={ICCIIcon} alt="KnowIcon" />
              </div>
              <div className="col-md-3">
                <LazyLoadImage className="clientsicon-imgcontent" src={ZimzeeIcon} alt="KnowIcon" /> 
              </div>                  
            </div>
              </div>
              <div className="col-md-6 secondrow-mobile">
                <div className="row">  
                  <LazyLoadImage className="clientsicon-imgcontent" src={WeaponIcon} alt="KnowIcon" />
                  <LazyLoadImage className="clientsicon-imgcontent" src={KnowIcon} alt="KnowIcon" />
                </div>
                <div className="row">
                  <LazyLoadImage className="clientsicon-imgcontent" src={BloodBrothersIcon} alt="KnowIcon" />
                  <LazyLoadImage className="clientsicon-imgcontent" src={WakefitIcon} alt="KnowIcon" />
                </div>
                <div className="row">
                  <LazyLoadImage className="clientsicon-imgcontent" src={IgdIcon} alt="KnowIcon" />
                  <LazyLoadImage className="clientsicon-imgcontent" src={SiruthuliIcon} alt="KnowIcon" />
                </div>
                <div className="row clientrow-content">
                  <LazyLoadImage className="clientsicon-imgcontent" src={ZimzeeIcon} alt="KnowIcon" />
                  <LazyLoadImage className="clientsicon-imgcontent" src={ICCIIcon} alt="KnowIcon" />
                </div>
          </div>
        </div>
      );
    }
}
export default Clients;