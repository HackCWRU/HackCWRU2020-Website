import React, { Component } from 'react';

class About extends Component{
    render(){
        return (
            <div id = "AboutSection" >
                <div className = "skewTitleBox">
                    <div>
                        WHAT IS HACKCWRU?
                    </div>
                </div>
                <div id = "AboutGrid" class="flex-grid">
                    <div className = "row">
                        <div class="AboutGrid-Item-Container">
                            <div class="AboutGrid-Item">
                                <div className = "bigClearText">HackCWRU is Case Western Reserve University’s annual hackathon.</div>
                            </div>
                        </div>
                        <div class="AboutGrid-Item-Container">
                            <div className="AboutGrid-Item">
                                <div className = "bigClearText">Groups of 1 - 4 members have 36 hours to make a technology project in one of four project tracks and win prizes.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;