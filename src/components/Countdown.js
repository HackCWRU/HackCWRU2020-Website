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
            <div id = "countdown">
                <div id = "countdownTitle"> COUNTDOWN TO HACKCWRU 2020: </div>
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