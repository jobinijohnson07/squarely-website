import React, { useState } from 'react';
import './modalPage.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import DismissButton from '../../images/dismissbutton.svg';


function ModalPage (){  
  return(
    <div className="modalpage" id="navbarTogglerDemoDismiss">
      <div className="row">
        <div className="col-md-4 first-row">
          <div className="social-content">Social MEDIA</div>
          <div className="socialitems-content">Linkedin</div>
          <div className="socialitems-content">Facebook</div>
          <div className="socialitems-content">Instagram</div>
          <div className="socialitems-content">Dribble</div>
          <div className="socialitems-content">Behance</div>
          <div className="socialitems-content">Medium</div>
        </div>
        <div className="col-md-4 second-row">
          <div className="social-content">MENU</div>
          <div className="menuitems-content">Works</div>
          <div className="menuitems-content">Services</div>
          <div className="menuitems-content">Process</div>
          <div className="menuitems-content">Stories</div> 
          <div className="menuitems-content">About us</div>
        </div>
        <div className="col-md-4 third-row">           
          <LazyLoadImage src={DismissButton} alt="dismissButton" />
        </div>
      </div>  
      <div className="modalhello-content">Say hello!</div>    
      <div className="modalsquarely-content">hello@squarely.co</div>    
    </div>
  );
}
export default ModalPage;

