import React, { Component } from 'react';
import Header from '../../Header/header';
import Banner from '../Banner/banner';
import CaseDetail from '../CasestudyDetail/caseDetail';
import Footer from '../../Footer/footer';

class CasePage extends Component{
    render() {
      return(
        <div>
          <Header />
          <Banner />
          <CaseDetail />
          <Footer />
        </div>
      );
    }
}
export default CasePage;