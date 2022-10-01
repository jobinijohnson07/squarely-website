import React, { Component } from 'react';
import './things.css'
import Union from '../../images/union.svg';
import Strategy from '../../images/strategy.svg';
import VectorArrow from '../../images/vectorarrow.svg';
import Expdesign from '../../images/expdesign.svg';
import Webdesign from '../../images/webdesign.svg';
import Development from '../../images/develpoment.svg';
import Immersive from '../../images/immersive.svg';

class ThingsWeDo extends Component{
    render() {
      return(
        <div className="things-section">
           <div className="things-content"><img className="union-imgcontent" src={Union} alt="union" />Things we do well</div>
           <div className="ideation-content">From ideation to launch, <br/> we <span className="bold-content">concord</span> your needs <br/> at <span className="bold-content">every stage!</span></div>
           <div className="icons-section">
             <div className="row whole-content">
               <div className='col firstrow-content'>
                 <img className="strategy-imgcontent" src={Strategy} alt="strategy" />
                 <div className="strategy-content">Digital Strategy</div>
                 <div className="action-content">We create an action plan on <br/> executing a holistic brand and <br/> user experience.</div>
                 <img className="vectorarrow-imgcontent" src={VectorArrow} alt="VectorArrow" />
               </div>
               <div className='col firstrow-content'>
                 <img className="strategy-imgcontent" src={Expdesign} alt="strategy" />
                 <div className="strategy-content">Experience Design</div>
                 <div className="action-content">We create an action plan on <br/> executing a holistic brand and <br/> user experience.</div>
                 <img className="vectorarrow-imgcontent" src={VectorArrow} alt="VectorArrow" />
               </div>
             </div>
           </div>
           <div className="icons-section">
             <div className="row whole-content">
               <div className='col firstrow-content'>
                 <img className="strategy-imgcontent" src={Webdesign} alt="strategy" />
                 <div className="strategy-content">Web Design</div>
                 <div className="action-content">We create an action plan on <br/> executing a holistic brand and <br/> user experience.</div>
                 <img className="vectorarrow-imgcontent" src={VectorArrow} alt="VectorArrow" />
               </div>
               <div className='col firstrow-content'>
                 <img className="strategy-imgcontent" src={Development} alt="strategy" />
                 <div className="strategy-content">Development</div>
                 <div className="action-content">We create an action plan on <br/> executing a holistic brand and <br/> user experience.</div>
                 <img className="vectorarrow-imgcontent" src={VectorArrow} alt="VectorArrow" />
               </div>
             </div>
           </div>
           <div className="icons-section">
             <div className="row whole-content">
               <div className='col lastrow-content'>
                 <img className="strategy-imgcontent" src={Immersive} alt="strategy" />
                 <div className="strategy-content">Immersive Design</div>
                 <div className="action-content">We create an action plan on <br/> executing a holistic brand and <br/> user experience.</div>
                 <img className="vectorarrow-imgcontent" src={VectorArrow} alt="VectorArrow" />
               </div>
               <div className='col-1 firstrow-content'>
                 {/* <img className="strategy-imgcontent" src={Immersive} alt="strategy" />
                 <div className="strategy-content">Immersive Design</div>
                 <div className="action-content">We create an action plan on <br/> executing a holistic brand and <br/> user experience.</div>
                 <img src={VectorArrow} alt="VectorArrow" /> */}
               </div>
             </div>
           </div>
           <div className='things-button-wrapper'>
             <button className='things-button'>Learn More</button>
           </div>
        </div>
        
      );
    }
}
export default ThingsWeDo;