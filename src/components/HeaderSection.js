import React, { Component } from 'react';
import Button from 'react';
import hackCWRUTitle from '../Assets/Title.svg';
import subTitle from '../Assets/Subtitle 2020.svg';
//import redButtonUp from '../Assets/register button up.svg';
//import whiteButtonUp from '../Assets/white button up.svg';
import Logo from './Logo.js';
import CoCPopUp from './CoCPopUp';

class HeaderSection extends Component {


  constructor(props) {
    super(props);
    this.state = {
      showCodeOfConductBox: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this.CoCBox = <CoCPopUp/>;
  }
  

  _onButtonClick() {
    this.setState({
      showCodeOfConductBox: ! this.state.showCodeOfConductBox,
    });
  }

  

    render() {
      var returnLink = encodeURIComponent("http://hackcwru.info");
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
              
              <button onClick={this._onButtonClick.bind(this)} id="registerBtn">Register</button>
              {/* {(this.state.showCodeOfConductBox) ? this.CoCBox : ''} */}
              <CoCPopUp showCodeOfConductBox={this.state.showCodeOfConductBox}
                        _onButtonClick={this._onButtonClick.bind(this)} />
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
