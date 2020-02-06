import React, { Component } from 'react';
import waterFall from '../Assets/waterfall_and_bridge.svg';
import FAQBox from './FAQBox';

class FAQ extends Component{
    render(){
        return (
            <div id = "FAQSection">
                {/*<div id="FAQBackgroundContainer">
                    <img id = "waterFall" src= {waterFall}></img>
                </div>*/}
                <div className = "skewTitleBox">
                    <div>
                        FAQ
                    </div>
                </div>
                <div id = "FAQBoxesContainer">
                    <div id ="FAQBoxesGrid">
                        <div className="row">
                            <div class="FAQItem">
                                <FAQBox question={"Where will HackCWRU 2020 take place?"} answer={"Hackers will be working in CWRU's Sears think[box]. Attendees can check in at the Veale Center lobby, 2138 Adelbert Rd, Cleveland, OH 44106."}/>
                            </div>
                            <div class="FAQItem">
                                <FAQBox question={"Who can attend?"} answer={"Anyone currently enrolled in a high school, undergraduate, or graduate program can attend."}/>
                            </div>
                            <div class="FAQItem">
                                <FAQBox question={"What if I don't have a lot of experience?"} answer={"First and foremost, hackathons are a learning experience. It wouldn't be fun if you knew exactly what to do. If you need help getting started or just can't find the source of a new feature we have a team of mentors at your disposal."}/>
                            </div>
                            <div class="FAQItem">
                                <FAQBox question={"What if I don't have an idea or team?"} answer={"No problem. There are plenty of other hackers with your same dilemma that you can join forces with. Thirty six hours is plenty of time for a couple hours of brainstorming. Also, we will have team building and idea brainstorming workshops. You are not required to be part of a team."}/>
                            </div>
                            <div class="FAQItem">
                                <FAQBox question={"Will travel be reimbursed?"} answer={"We guarantee up to $50 in travel reimbursement per person. Just make sure to save your travel receipt!"}/>
                            </div>
                            <div class="FAQItem">
                                <FAQBox question={"How much does it cost?"} answer={"Nothing. Food, drinks, power, building materials, and machine time are all provided for free."}/>
                            </div>
                            <div class="FAQItem">
                                <FAQBox question={"What should I bring?"} answer={"Besides your computer, bring anything that you'd like to hack with or that would make your sleepover more comfortable. We suggest a sleeping bag, a toothbrush, and a change of clothes. **Also, please bring a valid state ID or driver's license.**"}/>
                            </div>
                            <div class="FAQItem">
                                <FAQBox question={"Do I have to sleep over?"} answer={"No. You may come and go from the hackathon as you want."}/>
                            </div>
                            <div class="FAQItem">
                                <FAQBox question={"What if I don't have equipment to make my hack?"} answer={"We have that covered! We'll have laptops, 3D printers and a lot of MLH-provided hardare (including fancy VR stuff like the Oculus Rift!) provided for you to rent out for free."}/>
                            </div>
                            <div class="FAQItem">
                                <FAQBox question={"Is there free parking?"} answer={"Yes! We will have a reserved parking lot you can use for free."}/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default FAQ;