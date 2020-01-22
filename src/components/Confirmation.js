import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link, Button } from '@material-ui/core';

class Confirmation extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
        }
    }

    closeModal() {
        this.props.finishSignUp();
    }

    render(){
        var returnLink = encodeURIComponent("http://hackcwru.info/confirm");
        var CoCLink = <a href={encodeURIComponent("https://static.mlh.io/docs/mlh-code-of-conduct.pdf")}>MLH Code of Conduct</a>;
        return (
            <Dialog
            onClose={this.closeModal.bind(this)}
            open={this.props.signUpConfirmation}
            maxWidth={'lg'}
            fullWidth={true}
            >
            
            <div id="CoCPopUp-Container">
                <div>You have successfully registered for HackCWRU 2020!</div>
            </div>
            <Button onClick={this.closeModal.bind(this)} id="registerBtn">Back to main site</Button>
            </Dialog>
            
        )
    }
}

export default Confirmation;