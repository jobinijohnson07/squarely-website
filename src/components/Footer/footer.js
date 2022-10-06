import React, { Component } from 'react';
import './footer.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import FooterLogo from '../../images/footerlogo.svg';
import Linkedin from '../../images/linkedin.svg';
import Facebook from '../../images/facebook.svg';
import Instagram from '../../images/instagram.svg';
import Behance from '../../images/behance.svg';
import Medium from '../../images/medium.svg';
import Tribble from '../../images/tribble.svg';

class Footer extends Component{
    render() {
      return(
        <div className="footer-section">
          <div className="footerwhole-content">
           <div className="row">
            <div className="col-md-8 firstfooter-content">
              {/* <LazyLoadImage className="footer-imgcontent" src={FooterLogo} alt="FooterLogo" /> */}
              <div className="idea-content">Got an idea?</div>
              <div className="hellofooter-content">Say Hello!</div>
              <div className="hellosquarely-content">(941) 952 - 7227 | hello@squarely.co</div>
              
            </div>
            <div className="col-md-4">
               <div className="menus-content">Works</div>
               <div className="menus-content">Services</div>
               <div className="menus-content">Process</div>
               <div className="menus-content">Stories</div>
               <div className="menus-content">About Us</div>
            </div>
           </div>
           <div className="firstsfooter-content">
              <div className="row-value">
                <div className="uswhole-content">
                  <div className="us-content">US</div>
                  <div className="limestone-content">2055 Limestone Rd STE 200- <br/> C,Wilmington, DE, New Castle, <br/> US, 19808</div>
                </div>
                <div>
                  <div className="us-content">India</div>
                  <div className="limestone-content">67, Sri Ranga Garden, Saravana <br/> Nagar, Edayarpalayam, <br/> Coimbatore, 641025.</div>
                </div>
              </div>
              <div>
                <LazyLoadImage className="social-imgcontent" src={Linkedin} alt="linkedin" />
                <LazyLoadImage className="social-imgcontent" src={Facebook} alt="facebook" />
                <LazyLoadImage className="social-imgcontent" src={Instagram} alt="instagram" />
                <LazyLoadImage className="social-imgcontent" src={Behance} alt="behance" />
                <LazyLoadImage className="social-imgcontent" src={Medium} alt="medium" />
                <LazyLoadImage className="social-imgcontent" src={Tribble} alt="tribble" />
              </div>
              <div className="policies-content">FAQs  |  Cookie Policy  |  Privacy Notice  |  Terms of Use</div>
              <div className="copyrights-content">© 2022 Squarely Technology Solutions LLC. All rights reserved.</div>
           </div>
          </div>
        </div>
      );
    }
}
export default Footer;