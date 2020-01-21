import React, { Component } from 'react';
import stickerMuleLogo from '../Assets/SponsorLogos/stickerMuleLogo.svg';

class SponsorshipSection extends Component{
    render(){
        return (
            <div id = "SponsorshipSection" >
                <div id = "sponsorshipHeader">
                    Make connections <br/>
                    with our incredible sponsors...
                </div>
                <div id = "SponsorGrid" class="flex-grid">
                    <div class="SponsorGrid-Item topTierSponsor">
                        <div id="stickermule"><a href="http://hackp.ac/mlh-stickermule-hackathons"><img src={stickerMuleLogo}></img></a></div>
                    </div>
                 
                </div>
            </div>
        )
    }
}

export default SponsorshipSection;
