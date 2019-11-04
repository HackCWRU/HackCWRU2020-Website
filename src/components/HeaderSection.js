import React, { Component } from 'react';
import hackCWRUTitle from '../Assets/Title.svg';
import subTitle from '../Assets/Subtitle 2020.svg';
import redButtonUp from '../Assets/register button up.svg';
import whiteButtonUp from '../Assets/white button up.svg';
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
                </div>
              </div>
              <Logo />
            </div>
            <div className= "headerButtonAndInfoSection">
              <div className = "registerButtonGroup">
                <a href="https://dashboard.hackry.io/register?hackathonId=987tC2O5oK"><h2>Register!</h2></a>
                <div className = "registerButtonContainer">
                 <img id = "registerBtn" src = {redButtonUp} alt = "Button to register for the HackCWRU2020 hackathon"/>
                </div>
              </div>
              <div className = "oldWebsiteButtonGroup">
                <a href="http://hack.cwru.edu/"><h2>See last year's site</h2></a>
                <div className = "oldWebsiteButtonContainer">
                 <img id = "oldWebsiteBtn" src = {whiteButtonUp} alt = "Button to register for the HackCWRU2020 hackathon"/>
                </div>
              </div>
              <h3 id = "CWRU">Case Western Reserve University</h3>
              <h4 id = "date">February 9-11th 2020 </h4>  <br/><br/>
              <h1 id = "comingSoon"> Coming Soon...! </h1>
            </div>
          </div>
        );
    }
}

export default HeaderSection;
