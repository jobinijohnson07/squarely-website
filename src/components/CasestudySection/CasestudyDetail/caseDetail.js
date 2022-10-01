import React, { Component } from 'react';
import './caseDetail.css'
import WeaponHolder from '../../../images/weapondetail.svg';
import SloshDetail from '../../../images/sloshdetail.svg';
import WakefitDetail from '../../../images/wakefitdetail.svg';
import KnowellaDetail from '../../../images/knowelladetail.svg';
import EaseReachDetail from '../../../images/easereachdetail.svg';
import ICCIDetail from '../../../images/iccidetail.svg';
import SiruthuliDetail from '../../../images/siruthulidetail.svg';
import SculptorsDetail from '../../../images/sculptorsdetail.svg';
import BloodBrothersDetail from '../../../images/bloodetail.svg';
import Ausha from '../../../images/aushadetail.svg'

class CaseDetail extends Component{
    constructor() {
        super();
        this.state = {
          data: [
            {
                url: WeaponHolder,
                label: "Digital Commerce - Retail",
                projectName: "American Weapon Holder",
                description: "As a design partner of AWH, America’s premium military supplies, we designed all the digital touch points ranging from an intuitive mobile application to emailers and a robust website, to cater to the needs of over 100k Veterans."
            },
            {
                url: SloshDetail,
                label: "Mobile App - Digital Strategy",
                projectName: "Slosh",
                description: "As a design partner of AWH, America’s premium military supplies, we designed all the digital touch points ranging from an intuitive mobile application to emailers and a robust website, to cater to the needs of over 100k Veterans."
            },
            {
                url: WakefitDetail,
                label: "UI Design - Retail",
                projectName: "Wakefit",
                description: "As a design partner of AWH, America’s premium military supplies, we designed all the digital touch points ranging from an intuitive mobile application to emailers and a robust website, to cater to the needs of over 100k Veterans."
            },
            {
                url: KnowellaDetail,
                label: "Product Design",
                projectName: "Knowella",
                description: "As a design partner of AWH, America’s premium military supplies, we designed all the digital touch points ranging from an intuitive mobile application to emailers and a robust website, to cater to the needs of over 100k Veterans."
            },
            {
                url: EaseReachDetail,
                label: "3D Modelling - Healthcare",
                projectName: "3D Modelling - Healthcare",
                description: "As a design partner of AWH, America’s premium military supplies, we designed all the digital touch points ranging from an intuitive mobile application to emailers and a robust website, to cater to the needs of over 100k Veterans."
            },
            {
                url: ICCIDetail,
                label: "Website Design & Devlopment - NGO",
                projectName: "The Indian Chamber of Commerce",
                description: "As a design partner of AWH, America’s premium military supplies, we designed all the digital touch points ranging from an intuitive mobile application to emailers and a robust website, to cater to the needs of over 100k Veterans."
            },
            {
                url: SiruthuliDetail,
                label: "Website Design & Devlopment - NGO",
                projectName: "Siruthuli",
                description: "As a design partner of AWH, America’s premium military supplies, we designed all the digital touch points ranging from an intuitive mobile application to emailers and a robust website, to cater to the needs of over 100k Veterans."
            },
            {
                url: SculptorsDetail,
                label: "Website Design & Devlopment - Gym",
                projectName: "Sculptor’s Fitness & Lifestyle",
                description: "As a design partner of AWH, America’s premium military supplies, we designed all the digital touch points ranging from an intuitive mobile application to emailers and a robust website, to cater to the needs of over 100k Veterans."
            },
            {
                url: BloodBrothersDetail,
                label: "Product Engineering",
                projectName: "Blood Brothers",
                description: "As a design partner of AWH, America’s premium military supplies, we designed all the digital touch points ranging from an intuitive mobile application to emailers and a robust website, to cater to the needs of over 100k Veterans."
            },
            {
                url: Ausha,
                label: "Digital Commerce - Retail ",
                projectName: "Ausha",
                description: "As a design partner of AWH, America’s premium military supplies, we designed all the digital touch points ranging from an intuitive mobile application to emailers and a robust website, to cater to the needs of over 100k Veterans."
            }
          ]
        }
    }
    render() {
      return(
        <div className="caseDetail-section">
          {this.state.data.map((item,index) => {
            return (
              <div>
                <div className="case-desktopwrapper">    
                {(index % 2 == 0) ?
                  <div className="row">
                    <div className="col-md-6">
                      <img className="caseDetail-imgcontent" src={item.url} alt='img'/>
                    </div>
                    <div className="col-md-6">
                      <div className="label-content">{item.label}</div>
                      <div className="projectName-content">{item.projectName}</div>
                      <div className="description-content">{item.description}</div>
                    </div>                                
                  </div> : 
                  <div className="row">
                    <div className="col-md-6">
                      <div className="label-content">{item.label}</div>
                      <div className="projectName-content">{item.projectName}</div>
                      <div className="description-content">{item.description}</div>
                    </div>
                    <div className="col-md-6">
                      <img className="caseDetail-imgcontent" src={item.url} alt='img'/>
                    </div> 
                  </div>}
                </div> 

                <div className="case-mblwrapper">
                  <div className="row">
                    <div className="col-md-6">
                      <img className="caseDetail-imgcontent" src={item.url} alt='img'/>
                    </div>
                    <div className="col-md-6">
                      <div className="label-content">{item.label}</div>
                      <div className="projectName-content">{item.projectName}</div>
                      <div className="description-content">{item.description}</div>
                    </div>                                
                  </div>
                </div> 
              </div>
                               
              ) 
          })}
          </div>
      ); 
    }
}
export default CaseDetail;