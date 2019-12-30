import React, { Component } from 'react';
import hackCWRUTitle from '../Assets/Title.svg';
import subTitle from '../Assets/Subtitle 2020.svg';
//import redButtonUp from '../Assets/register button up.svg';
//import whiteButtonUp from '../Assets/white button up.svg';
import Logo from './Logo.js';

class HeaderSection extends Component {
    render() {
        return (
          <div className = "headerMainContent" >
            <div className = "header">
              <div className = "titleContainer">
                <div className = "mainTitleContainer">
                  <img id = "CWRUTitle" src =  {hackCWRUTitle} alt = "The HackCWRU7 Title"/>
                </div>
                
                <div className = "subTitleContainer">
                  <img id = "subTitle"  src = {subTitle} alt = "The 2020 subtitle" />
                  <h2 id = "CWRU">Case Western Reserve University</h2>
                  <h2 id = "date">February 9-11th 2020 </h2>
                </div>
                <Logo/>
              </div>
              
            </div>
            <div className= "headerButtonSection">
              <div className = "registerButtonGroup">
                <a href="http://hack.cwru.edu/"><button id="registerBtn">Register</button></a>
              </div>
              <div className = "oldWebsiteButtonGroup">
                <a href="http://hack.cwru.edu/"><button id="oldWebsiteBtn">2019 website</button></a>
              </div>
              <h1 id = "comingSoon"> Coming Soon...! </h1>
            </div>
          </div>
        );
        }
}

export default HeaderSection;
