import React, { Component } from 'react';

class About extends Component{
    render(){
        return (
            <div className = "about" >
                <h3 id = "aboutTitle">What is HackCWRU?</h3>
                <h4 id = "aboutContent">HackCWRU brings together the brightest and most creative students to promote unrestricted technological innovation. Hosted at Case Western Reserve University, over 350 students will spend 36 hours bringing their imagination into the real world. Attendees will work with peers and mentors to create projects in one of four project tracks. Don’t be intimidated! You don’t have to know what you’re doing to attend. If you are new to hackathons, we look forward to introducing you to a world of creation. Lastly, at HackCWRU we abide by and enforce MLH’s, 
                <a href="https://mlh.io/code-of-conduct">Code of Conduct</a>, "."</h4>
            </div>
        )
    }
}

export default About;