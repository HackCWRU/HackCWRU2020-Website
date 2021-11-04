import React, { Component } from 'react';

class Countdown extends Component{
    // Constructor 
    constructor (props) {
        super(props);
        const { HackDate } = this.props;
        this.state = {
            timeLeft : this.setCountdown(HackDate)
        };
    }


    render(){
        const {timeLeft} = this.state;
        return (
            <div id = "countdown">
                <div id = "countdownTitle"> COUNTDOWN TO HACKCWRU 2022: </div>
                <div id = "countdownNumbers">&nbsp;{timeLeft}</div>
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



    // This is gross and I can tell they ripped it from stack overflow
    // who uses var
    // I'll refactor if I have time or if I care enough

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

        // Note: had to fix what they had here
        // Check millisecond distance from hackstart date
        // if it's within 0 to 36 hours in milliseconds (129600000 milliseconds), it's going on
        // if it's out of that range in negative, it's over
        // if it's positive, it hasn't happened yet
        if (distance < -129600000)
            result = "This event has passed. See you next year!";
        else if (distance < 0 && distance > -129600000)
            result = "Happening now!";
        else 
            result = days + " : " + this.zeroPad(hours,2) + " : " + this.zeroPad(minutes,2) + " : " + this.zeroPad(seconds,2);
    
        return result; 
    }

    zeroPad(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    }

   
    
}

export default Countdown;