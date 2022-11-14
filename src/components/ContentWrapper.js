import React from 'react';
import '../assets/css/app.css';
import TopBar from './TopBar'
import ContentRowTop from './ContentRowTop'
import Sidebar from './Sidebar'
function ContentWrapper(){
    return(
        <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column">
            
            <div id="content">
			
            <TopBar/>
            <ContentRowTop/>
			</div>

        </div>
        
        </div>
        )
    }
export default ContentWrapper;