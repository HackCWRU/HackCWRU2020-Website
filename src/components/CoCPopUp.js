import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from '@material-ui/core';

class CoCPopUp extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
          checkedBox: false
    
        }
    }

    GreenCheckbox = withStyles({
        root: {
          color: '#FFFFFF',
          '&$checked': {
            color: '#F0F0F0',
          },
        },
        checked: {},
      })(props => <Checkbox color="default" {...props} />);

    closeModal() {
        this.props._onButtonClick();
        this.setState({
            checkedBox: false
        })
    }

    render(){
        var returnLink = encodeURIComponent("http://hackcwru.info/confirm/");
        var CoCLink = <a href={encodeURIComponent("https://static.mlh.io/docs/mlh-code-of-conduct.pdf")}>MLH Code of Conduct</a>;
        return (
            <Dialog
            onClose={this.closeModal.bind(this)}
            open={this.props.showCodeOfConductBox}
            maxWidth={'lg'}
            fullWidth={true}
            >
            
            <div id="CoCPopUp-Container">
                <div>Please read the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">MLH Code of Conduct</a></div>
                <FormGroup className ="CocFormGroup">
                    <FormControlLabel control={
                        <this.GreenCheckbox
                        onChange={(event, newValue) => {
                           this.setState({
                             checkedBox: newValue
                           })}}
   
                       />
                    }
                    label="I have read and agree to the MLH Code of Conduct"
                    
                    />
                    
                    
                    {this.state.checkedBox ? 
                    <div className = "registerButtonGroup">
                        <a href={"https://my.mlh.io/oauth/authorize?client_id=92a0cd65f23af7c66fdf0aae482d48eda0b85a0f8c19631a5ddd4294361f0582&redirect_uri=" + returnLink + "&response_type=token"}><button id="registerBtn">Register</button></a>
                    </div>
                    : "" }
                </FormGroup>
            </div>
            </Dialog>
        )
    }
}

export default CoCPopUp;