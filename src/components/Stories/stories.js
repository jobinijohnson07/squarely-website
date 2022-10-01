import React, { Component } from 'react';
import './stories.css'
import Union from '../../images/union.svg';
import DesignPartner from '../../images/designpartner.svg';
import BusinessDesign from '../../images/businessdesign.svg';
import Obession from '../../images/obsession.svg';
import DesignSystem from '../../images/designsystem.svg';
 
class Stories extends Component{
    render() { 
      return(
        <div className="stories-section">
           <div className="stories-content"><img className="union-imgcontent" src={Union} alt="union" />Stories</div>
           <p className="storiesservice-content">Learn more about <span className="bold-content">our culture,</span> what makes us tick, how we research and design & <span className="bold-content">philosophies we love.</span></p>
           
           <div style={{ display: 'flex'}}>
                <div className="firststory-desktop">
                  <div style={{ marginLeft: '100px'}}>
                    <img className="stories-imgcontent" src={DesignPartner} alt="DesignPartner" />
                    <div className="point-content">Point of view</div>
                    <div className="design-content">Choosing a Design Partner</div>
                  </div>
                </div> 
                <div className="firststory-mbl">
                  <div style={{ marginLeft: '20px'}}>
                    <img className="stories-imgcontent" src={DesignPartner} alt="DesignPartner" />
                    <div className="point-content">Point of view</div>
                    <div className="design-content">Choosing a Design Partner</div>
                  </div>
                </div>
                <div style={{ marginLeft: '20px'}}>
                    <img className="stories-imgcontent" src={BusinessDesign} alt="DesignPartner" />
                    <div className="point-content">Point of view</div>
                    <div className="design-content">The Business Value of UX Design</div>
                </div>
                <div style={{ marginLeft: '20px'}}>
                    <img className="stories-imgcontent" src={Obession} alt="DesignPartner" />
                    <div className="point-content">Whitepaper</div>
                    <div className="design-content">Culture of Customer Obsession</div>
                </div>
                <div style={{ marginLeft: '20px'}}>
                    <img className="stories-imgcontent" src={DesignSystem} alt="DesignPartner" />
                    <div className="point-content">Point of view</div>
                    <div className="design-content">Design System</div>
                </div>
           </div> 
          
            
           <div className='stories-button-wrapper'>
             <button className='stories-button'>Show more Stories</button>
           </div>
        </div>
      );
    }
}
export default Stories;