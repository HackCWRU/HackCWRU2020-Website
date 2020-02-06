import React, { Component } from 'react';
import TrackBox from './TrackBox';
import FinTechIcon from '../Assets/FinTech_track_icon.png';
import HealthIcon from '../Assets/Health_track_icon.png';
import IoTIcon from '../Assets/IoT_track_icon.png';
import MakerIcon from '../Assets/Maker_track_icon.png';



class TracksSection extends Component{
    render(){
        return (
            <div id = "TracksSection" >
                <div id = "tracksHeader">
                    Each team can do a project in any of our four project tracks.
                </div>
                <div id = "tracksBoxesContainer">
                    <div id ="tracksBoxesGrid">
                        <div className="row">
                            <div class="tracksItem">
                                <TrackBox title={"FinTech"} icon={FinTechIcon} description={"Projects that intersect with finance, banking or economics."} altText={"A coin icon representing the Financial Technology project track"}/>
                            </div>
                            <div class="tracksItem">
                                <TrackBox title={"Civic"} icon={IoTIcon} description={"Projects involving smart devices and the data they generate."} altText={"A house icon representing the Civic project track"}/>
                            </div>
                            <div class="tracksItem">
                                <TrackBox title={"Health"} icon={HealthIcon} description={"Projects based in health IT, public health, or bioinformatics."} altText={"An icon representing the Health project track."}/>
                            </div>
                            <div class="tracksItem">
                                <TrackBox title={"Maker"} icon={MakerIcon} description={"Projects that embody the DIY maker spirit."} altText={"A hammer icon representing the Maker project track."}/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div id = "prizesMessage" className="bigClearText">
                    Check out the HackCWRU2020 <a href="https://hackcwru-2020.devpost.com/">Devpost</a> to see our prizes and judges.
                </div>
            </div>
        )
    }


}

export default TracksSection;