import React, { Component } from 'react';
//import ScheduleFile from'./ScheduleByDay.txt';

class Schedule extends Component{
    
    render(){
        // const readline = require('readline');
        // const fs = require('fs');

        // const readInterface = readline.createInterface({
        //     input: fs.createReadStream('/path/to/file'),
        //     output: process.stdout,
        //     console: false
        // });

        // readInterface.on('line', function(line) {
        //     console.log(line);
        // });

        return (
            <div id = "ScheduleSection" >
                <div className = "skewTitleBox">
                    <div>
                        Schedule
                    </div>
                </div>
                <div id ="ScheduleGridContainer">
                    <div className ="Schedule-DayContainer">
                        <div className="Schedule-Day-Title">
                            Friday
                        </div>
                        <div className="Schedule-Day-ItemContainer">
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    9:00am
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Check-In
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    11:00am
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Breakfast
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    12:00pm
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Lunch
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className ="Schedule-DayContainer">
                        <div className="Schedule-Day-Title">
                            Saturday
                        </div>
                        <div className="Schedule-Day-ItemContainer">
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    9:00am
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Check-In
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    11:00am
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Breakfast
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    12:00pm
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Lunch
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className ="Schedule-DayContainer">
                        <div className="Schedule-Day-Title">
                            Sunday
                        </div>
                        <div className="Schedule-Day-ItemContainer">
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    9:00am
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Check-In
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    11:00am
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Breakfast
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    12:00pm
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Lunch
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Schedule;