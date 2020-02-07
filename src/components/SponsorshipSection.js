import React, { Component } from 'react';
import stickerMuleLogo from '../Assets/SponsorLogos/stickerMuleLogo.svg';
import EpicLogo from '../Assets/SponsorLogos/EpicLogo.png';
import JPMorganLogo from '../Assets/SponsorLogos/JPMorganLogo.png';
import KeyBankLogo from '../Assets/SponsorLogos/KeyBankLogo.png';
import LinodeLogo from '../Assets/SponsorLogos/LinodeLogo.png';
import MediViewLogo from '../Assets/SponsorLogos/MediViewLogo.svg';
import RockwellLogo from '../Assets/SponsorLogos/RockwellLogo.png';
import HylandLogo from '../Assets/SponsorLogos/HylandLogo.png';
import EtsyLogo from '../Assets/SponsorLogos/EtsyLogo.png';

class SponsorshipSection extends Component{
    render(){
        return (
            <div id = "SponsorshipSection" >
                <div id = "sponsorshipHeader">
                    Make connections <br/>with our incredible sponsors...
                </div>
                <div id = "SponsorGrid" class="flex-grid">
                    <div className="SponsorGrid-Item topTierSponsor" id="JoeMandato">Joe Mandato <br/>(MGT '04)</div>

                    <div className="SponsorGrid-Item topTierSponsor"><div><a href="http://hackp.ac/mlh-stickermule-hackathons"><img id="stickermule" src={stickerMuleLogo}></img></a></div></div>
                    
                    <div className="SponsorGrid-Item" id="EpicLogo"><div><a href="https://www.epic.com/"><img src={EpicLogo}></img></a></div></div>
                    
                    <div className="SponsorGrid-Item topTierSponsor" id="JPMorganLogo"><div><a href="https://careers.jpmorgan.com/us/en/students/programs"><img src={JPMorganLogo}></img></a></div></div>
                
                    <div className="SponsorGrid-Item topTierSponsor" id="KeyBankLogo"><div><a href="https://www.key.com/about/careers/students-graduates.jsp"><img src={KeyBankLogo}></img></a></div></div>
                
                    <div className="SponsorGrid-Item " id="LinodeLogo"><div><a href="https://www.linode.com/"><img src={LinodeLogo}></img></a></div></div>
                
                    <div className="SponsorGrid-Item " id="MediViewLogo"><div><a href="https://mediview.com/about/"><img src={MediViewLogo}></img></a></div></div>
                
                    <div className="SponsorGrid-Item topTierSponsor"id="RockwellLogo"><div><a href="https://www.rockwellautomation.com/en_NA/about-us/careers/overview.page?pagetitle=Students-and-New-Graduates&docid=a9f19ab326227e13974d7d78876bd6ec"><img src={RockwellLogo}></img></a></div></div>

                    <div className="SponsorGrid-Item"id="HylandLogo"><div><a href="https://www.hyland.com/en"><img src={HylandLogo}></img></a></div></div>

                    <div className="SponsorGrid-Item"id="EstyLogo"><div><a href="https://www.etsy.com/?ref=lgo"><img src={EtsyLogo}></img></a></div></div>
                 
                </div>
            </div>
        )
    }
}

export default SponsorshipSection;
