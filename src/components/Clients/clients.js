import React, { Component } from 'react';
import './clients.css'
import Union from '../../images/union.svg';
import KnowIcon from '../../images/knowellaicon.svg';
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
          <div className="clients-content"><img className="union-imgcontent" src={Union} alt="union" />Clients</div>
          <div className="row">
            <div className="col-md-6">
              <p className="clientservice-content">World-class design at <span className="bold-content">speed & scale</span></p>
              <p className="reality-content">Bringing that seed of a thought to reality through scalable, sustainable and futuristic design solutions.</p>
            </div>
            <div className="col-md-6 secondrow-desktop">
              <div className="row"> 
                <img className="clientsicon-imgcontent" src={WeaponIcon} alt="KnowIcon" />
                <img className="clientsicon-imgcontent" src={KnowIcon} alt="KnowIcon" />
                <img className="clientsicon-imgcontent" src={BloodBrothersIcon} alt="KnowIcon" />
              </div>
              <div className="row">
                <img className="clientsicon-imgcontent" src={WakefitIcon} alt="KnowIcon" />
                <img className="clientsicon-imgcontent" src={IgdIcon} alt="KnowIcon" />
                <img className="clientsicon-imgcontent" src={SiruthuliIcon} alt="KnowIcon" />
              </div>
              <div className="row clientrow-content">
                <img className="clientsicon-imgcontent" src={ZimzeeIcon} alt="KnowIcon" />
                <img className="clientsicon-imgcontent" src={ICCIIcon} alt="KnowIcon" />
                <img className="clientsicon-imgcontent" src={Ausha} alt="KnowIcon" />
              </div>
            </div>
            <div className="col-md-6 secondrow-mobile">
              <div className="row"> 
                <img className="clientsicon-imgcontent" src={WeaponIcon} alt="KnowIcon" />
                <img className="clientsicon-imgcontent" src={KnowIcon} alt="KnowIcon" />
              </div>
              <div className="row">
                <img className="clientsicon-imgcontent" src={BloodBrothersIcon} alt="KnowIcon" />
                <img className="clientsicon-imgcontent" src={WakefitIcon} alt="KnowIcon" />
              </div>
              <div className="row">
                <img className="clientsicon-imgcontent" src={IgdIcon} alt="KnowIcon" />
                <img className="clientsicon-imgcontent" src={SiruthuliIcon} alt="KnowIcon" />
              </div>
              <div className="row clientrow-content">
                <img className="clientsicon-imgcontent" src={ZimzeeIcon} alt="KnowIcon" />
                <img className="clientsicon-imgcontent" src={ICCIIcon} alt="KnowIcon" />
              </div>
            </div>
          </div>
        </div>
      );
    }
}
export default Clients;