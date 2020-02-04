import React, { Component } from 'react';
import DevpostLogo from '../Assets/devpost_logo.svg';

class DevpostButton extends Component{
    
    render(){
        return (
            <div id = "DevpostButton" >
                <a href="https://hackcwru-2020.devpost.com/"> <img id="devpostLogo" src = {DevpostLogo} onClick="openDevpost()"></img> </a>
            </div>
        )
    }
    openDevpost() {
        
    }
}

export default DevpostButton;