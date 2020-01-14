import React, { Component } from 'react';

class FAQBox extends Component{
    render(){
        return (
            <div className = "FAQBox">
                <div className ="FAQBoxContent">
                    <div className = "FAQQuestion">
                        {this.props.question}
                    </div>
                    <div className="FAQAnswer">
                        {this.props.answer}
                    </div>
                </div>
            </div>
        )
    }
}

export default FAQBox;