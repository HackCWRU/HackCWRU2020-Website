import React, { Component } from 'react';
import Button from 'react';
import hackCWRUTitle from '../Assets/Title.svg';
import subTitle from '../Assets/Subtitle 2020.svg';
//import redButtonUp from '../Assets/register button up.svg';
//import whiteButtonUp from '../Assets/white button up.svg';
import Logo from './Logo.js';
import CoCPopUp from './CoCPopUp';
import Confirmation from './Confirmation';
import { Redirect } from 'react-router-dom';

class HeaderSection extends Component {


  constructor(props) {
    super(props);
    const {signUpConfirmation} = this.props
    this.state = {
      showCodeOfConductBox: false,
      signUpConfirmation,
      redirectToMain: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this.CoCBox = <CoCPopUp/>;
  }
  
  finishSignUp() {
    this.setState({
      signUpConfirmation: ! this.state.signUpConfirmation,
      redirectToMain: true,
    });
  }

  _onButtonClick() {
    this.setState({
      showCodeOfConductBox: ! this.state.showCodeOfConductBox,
    });
  }

  

    render() {
      var returnLink = encodeURIComponent("http://hackcwru.info");
        
      if(this.state.redirectToMain)
        return <Redirect to='/'/>

      return(
          <div id = "HeaderSection" >
            <div className = "header">
              <div className = "titleContainer">
                <div className = "mainTitleContainer">
                  <img id = "CWRUTitle" src =  {hackCWRUTitle} alt = "The HackCWRU7 Title"/>
                </div>
                <div className = "subTitleAndLogoContainer">
                  <div className = "subTitleContainer">
                    <div class="subTitleGrid">
                      <div id="headerInfo">
                        <div id = "CWRU" className = "bigClearText">Case Western Reserve University</div>
                        <div id = "date" className = "bigClearText">February 7-9th 2020</div>
                      </div>
                      <div id="year">
                        <img id = "subTitle"  src = {subTitle} alt = "A stylized 2020"/>  
                      </div>
                    </div>
                  </div>
                  <Logo/>
                </div>
              </div>
              
            </div>
            <div className= "headerButtonSection">
              <div className ="confirmation">
                <Confirmation signUpConfirmation={this.state.signUpConfirmation}
                  finishSignUp={this.finishSignUp.bind(this)} />

              </div>

              <div className = "registerButtonGroup">
              
              <button onClick={this._onButtonClick.bind(this)} id="registerBtn">Register</button>
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
