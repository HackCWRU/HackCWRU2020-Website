import React, { Component } from 'react';

class Schedule extends Component{
    
    render(){
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