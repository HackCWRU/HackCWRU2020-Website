import React, { Component } from 'react';

class Countdown extends Component{
    // Constructor 
    constructor (props) {
        super(props);
        const {HackDate} = this.props;
        this.state = {
            timeLeft : this.setCountdown(HackDate)
        };
    }


    render(){
        const {timeLeft} = this.state;
        return (
            <div className = "countdown">
                <h3 id = "countdownText"> COUNTDOWN TO HACKCWRU 2020:   &nbsp;
                                          {timeLeft}</h3>
            </div>
        )
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                timeLeft: this.setCountdown(this.props.HackDate)
            })
        }, 1000);
    }



    // function to set the countdown time
    setCountdown(HackDate) {
        // Set the date count down to
        const countDownDate = new Date(HackDate).getTime();
        // Update the countdown every second
            // Get current time
            var currentTime = new Date().getTime();
            var result;
            var distance = countDownDate - currentTime;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(days === 0 && hours === 0 && minutes === 0 && seconds === 0)
                result = "On Going";
            else 
                result = days + " : " + hours + " : " + minutes + " : " + seconds;
        
            return result; 
    }

   
    
}

export default Countdown;