import React, { Component } from 'react';

class trackBox extends Component{
    render(){
        return (
            <div className = "tracksBox">
                <div className ="tracksBoxContent">
                    <div className = "tracksTitle">
                        {this.props.title}
                    </div>
                    <img className = "tracksIcon" src={this.props.icon} alt={this.props.altText}></img>
                    <div className="tracksDescription">
                        {this.props.description}
                    </div>
                </div>
            </div>
        )
    }
}

export default trackBox;