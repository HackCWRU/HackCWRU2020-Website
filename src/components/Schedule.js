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
                        SCHEDULE    
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
                                    5:30 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Check-In Starts
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    7:00 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Opening Ceremony 
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    8:00 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Dinner <br/> Team Building Workshop
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    8:30 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Idea Creation
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    9:00 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Hacking starts
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    10:00 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Think&#91;box&#93; laser cutting workshop
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    10:30 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Think&#91;box&#93; 3D printing workshop
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    11:00 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Think&#91;box&#93; laser cutting workshop
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    11:30 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Think&#91;box&#93; 3D printing workshop
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    12:00 AM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Midnight Snack
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
                                    1:45 AM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Mini tournament 1: Smash
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    8:00 AM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Breakfast
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    9:00 AM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    ISAACS IoT 101 Workshop
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    11:00 AM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    JP Morgan Workshop
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    12:45 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Lunch
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    1:00 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    MLH Event: Capture the Flag
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    2:00 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Sponsor Networking
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    3:15 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Professor Loui's Workshop
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    4:30 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Web Development Workshop 
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    6:00 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Doug Miel's Workshop
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    7:00 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Dinner
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    9:00 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    "General Magic" movie screening
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    12:00 AM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Late Night Snack
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
                                    1:15 AM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Mini Tournament 2: Ping Pong
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    7:00 AM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Breakfast
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    8:00 AM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Project Submission Deadline
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    9:00 AM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Hacking ends
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    10:15 AM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Judging Starts
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    11:15 AM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Lunch
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    12:00 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Judging Ends
                                </div>
                            </div>
                            <div className="Schedule-Day-Item">
                                <div className="Schedule-Day-Item-Time">
                                    12:30 PM
                                </div>
                                <div className="Schedule-Day-Item-EventName">
                                    Closing Ceremony
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