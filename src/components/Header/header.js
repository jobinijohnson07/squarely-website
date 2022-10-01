import React, { useState } from 'react';
import './header.css'
import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import MblLogo from '../../images/mbllogo.svg';
import Hamburger from '../../images/hamburger.svg';
import DismissButton from '../../images/dismissbutton.svg';
import {Modal} from "react-bootstrap";

function Header() {  
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   
    return(  
      <div className='header-section'>
        <div className="row-content">
          <div className='logo-wrapper'>
              <img className='logo' src={MblLogo} alt='SquarelyLogo'/>
              <img className='mbllogo' src={MblLogo} alt='SquarelyLogo'/>
          </div>
        </div>
        <div className=" nav-item-wrapper">
        <Button variant="primary" onClick={handleShow}>
            <span className='item'><img src={Hamburger} alt="hamburger" /></span> 
        </Button>
        </div>
        <Modal
        show={show}
        onHide={handleClose}
        // dialogClassName="modal-90w"
        // aria-labelledby="example-custom-modal-styling-title"
      >
        {/* <Modal.Header closeButton>
        </Modal.Header> */}
        <Modal.Body>
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
            
                <img src={DismissButton} alt="dismissButton" />

            </div>
          </div>  
          <div className="modalhello-content">Say hello!</div>    
          <div className="modalsquarely-content">hello@squarely.co</div>    
        </Modal.Body>
      </Modal>
      </div> 
    );  
   
 }       
 export default Header;