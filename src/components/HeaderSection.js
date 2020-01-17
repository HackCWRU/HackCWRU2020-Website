import React, { Component } from 'react';
import hackCWRUTitle from '../Assets/Title.svg';
import subTitle from '../Assets/Subtitle 2020.svg';
//import redButtonUp from '../Assets/register button up.svg';
//import whiteButtonUp from '../Assets/white button up.svg';
import Logo from './Logo.js';

class HeaderSection extends Component {
    render() {
      var hackerApplicationLink = encodeURIComponent("http://hackcwru.info");
        return (
          <div className = "HeaderSection" >
            <div className = "header">
              <div className = "titleContainer">
                <div className = "mainTitleContainer">
                  <img id = "CWRUTitle" src =  {hackCWRUTitle} alt = "The HackCWRU7 Title"/>
                </div>
                <div className = "subTitleAndLogoContainer">
                  <Logo/>
                  <div className = "subTitleContainer">
                  <div class="flex-grid">
                    <div class="col">
                      <div id = "CWRU" className = "bigClearText">Case Western Reserve University</div>
                      <div id = "date" className = "bigClearText">February 7-9th 2020</div>
                    </div>
                    <div class="col">
                      <img id = "subTitle"  src = {subTitle} alt = "The 2020 subtitle"/>
                    </div>
                  </div>
                    
                    
                  </div>
                </div>
              </div>
              
            </div>
            <div className= "headerButtonSection">
              <div className = "registerButtonGroup">
                <a href={"https://my.mlh.io/oauth/authorize?client_id=92a0cd65f23af7c66fdf0aae482d48eda0b85a0f8c19631a5ddd4294361f0582&redirect_uri=" + hackerApplicationLink + "&response_type=token"}><button id="registerBtn">Register</button></a>
              </div>
              <div className = "oldWebsiteButtonGroup">
                <a href="http://hack.cwru.edu/"><button id="oldWebsiteBtn">2019 website</button></a>
              </div>
            </div>
          </div>
        );
        }
}

export default HeaderSection;
