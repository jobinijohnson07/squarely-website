import React, { Component } from 'react';
import './stories.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "react-slick";
import Union from '../../images/union.svg';
import DesignPartner from '../../images/designpartner.svg';
import BusinessDesign from '../../images/businessdesign.svg';
import Obession from '../../images/obsession.svg';
import DesignSystem from '../../images/designsystem.svg';
import BorderAnimeButton from '../../shared/borderAnimeButton/borderAnimeButtom';
 
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
  <div
  className={className}
  style={{ ...style, background: "transparent" }}
  onClick={onClick}
  />
  );
  }

  function SamplePreviousArrow(props) {
    const { className, style, onClick } = props;
    return (
    <div
    className={className}
    style={{ ...style, background: "transparent" }}
    onClick={onClick}
    />
    );
    }

  class Stories extends Component {
    render() {
      const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        centerMode: false,
        centerPadding: "30px",
        // slidesToShow: 5,
        // slidesToScroll: 2,
        swipeToSlide: true,
        variableWidth: true,
        afterChange: function (index) {
        console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
        },
        nextArrow: 
        <SampleNextArrow />
        
        , 
        previousArrow:
        <SamplePreviousArrow /> 
        };

      return(
        <div className="stories-section">
           <h6><LazyLoadImage className="union-imgcontent" src={Union} alt="union" />What makes us tick?</h6>
           <p className="storiesservice-content">Learn more about <span className="bold-content">our <br/>culture,</span> what makes us tick, <br/>how we research and design & <span className="bold-content">philosophies we love.</span></p>
           
           <div style={{ display: 'flex'}}> 
             <Slider {...settings}>
                <div className="firststories-desktop">
                  <div className="card-imgcontent">
                    <img className="stories-imgcontent" src={DesignPartner} alt="DesignPartner" />
                    <div className="point-content">Point of view</div>
                    <div className="design-content">Choosing a Design Partner</div>
                  </div>
                </div> 
                {/* <div className="firststories-mbl">
                  <div className="card-imgcontent" style={{ marginLeft: '20px'}}>
                    <img className="stories-imgcontent" src={DesignPartner} alt="DesignPartner" />
                    <div className="point-content">Point of view</div>
                    <div className="design-content">Choosing a Design Partner</div>
                  </div>
                </div> */}
                <div className="card-imgcontent">
                    <img className="stories-imgcontent" src={BusinessDesign} alt="DesignPartner" />
                    <div className="point-content">Point of view</div>
                    <div className="design-content">The Business Value of UX Design</div>
                </div>
                <div className="card-imgcontent">
                    <img className="stories-imgcontent" src={Obession} alt="DesignPartner" />
                    <div className="point-content">Whitepaper</div>
                    <div className="design-content">Culture of Customer Obsession</div>
                </div>
                <div className="card-imgcontent">
                    <img className="stories-imgcontent" src={DesignSystem} alt="DesignPartner" />
                     <div className="point-content">Point of view</div>
                    <div className="design-content">Design System</div>
                </div>
                <div className="card-imgcontent">
                    <img className="stories-imgcontent" src={Obession} alt="DesignPartner" />
                    <div className="point-content">Whitepaper</div>
                    <div className="design-content">Culture of Customer Obsession</div>
                </div>
                <div className="card-imgcontent">
                    <img className="stories-imgcontent" src={DesignSystem} alt="DesignPartner" />
                     <div className="point-content">Point of view</div>
                    <div className="design-content">Design System</div>
                </div>
                <div className="card-imgcontent">
                    <img className="stories-imgcontent" src={Obession} alt="DesignPartner" />
                    <div className="point-content">Whitepaper</div>
                    <div className="design-content">Culture of Customer Obsession</div>
                </div>
                <div className="card-imgcontent">
                    <img className="stories-imgcontent" src={DesignSystem} alt="DesignPartner" />
                     <div className="point-content">Point of view</div>
                    <div className="design-content">Design System</div>
                </div>
              </Slider>  
           </div> 
          
           

           {/* <div className='stories-button-wrapper'>
             <button className='stories-button'>Show more Stories</button>
             <BorderAnimeButton label="Learn More" width="auto" class='stories-button' />
           </div>  */}
        </div>
      );
  }
}
export default Stories;