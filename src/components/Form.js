import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextFied from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Form extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        messageSent: false
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    sendMessage = e => {
        e.preventDefault();
        this.setState({messageSent: true})
        // Process Data //
        console.log(this.state);
    }

    render() {
        let confirmation = this.state.messageSent ?
            (<div>Message Sent!</div>) : null;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Contact Form" />
                    {confirmation}
                    <TextFied
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={this.handleChange('firstName')}
                    />
                    <br />
                    <TextFied
                        hintText="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={this.handleChange('lastName')}
                    />
                    <br />
                    <TextFied
                        hintText="Enter Your Email"
                        floatingLabelText="Email"
                        onChange={this.handleChange('email')}
                    />
                    <br />
                    <TextFied
                        hintText="Enter Your Message"
                        floatingLabelText="Message"
                        onChange={this.handleChange('message')}
                    />
                    <br />
                    <RaisedButton
                        label="Send"
                        style={StyleSheet.button}
                        onClick={this.sendMessage}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Form;