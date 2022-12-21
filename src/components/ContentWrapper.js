import React from 'react';
import '../assets/css/app.css';
import TopBar from './TopBar'
import ContentRowTop from './ContentRowTop'
import Sidebar from './Sidebar'
import Footer from './Footer'
function ContentWrapper(){
    return(
        
        <div id="content-wrapper" className="d-flex flex-column">
			
            <TopBar/>
            <ContentRowTop/>
            <Footer/>
			</div>
        
        )
    }
export default ContentWrapper;