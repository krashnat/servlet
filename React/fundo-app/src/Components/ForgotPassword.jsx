import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';

import controller from '../Controller/userController';


export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {

            email: '',
            error: false,
            message: ''
        }

    }

    onChangeEmail = (event) => {

        var email = event.target.value;
        this.setState({
            email: email
        })

    }

    onSubmit = () => {
        var email = {
            "email": this.state.email,

        }

        console.log(email);
        // await     
        controller.forgotPassword(email).then((res) => {
            this.props.history.push("/inform")
            console.log(res.data);
        }).catch((err) => {

            console.log("error", err.response)
            // var msg = err.response.data.message
            
            this.setState({ message:'the given email is not exist' })

        })
        console.log('-----', this.state.message);
    }

    render() {
        return (
            <div className="registerForm">
                <Card className="logincard">
                    <div className="forgot-heading">
                        <div className='register-fundoo'>
                            <h1 className='register-h1'>
                                <span style={{ color: "#2196f3" }}>f</span>
                                <span style={{ color: "#b71c1c" }}>u</span>
                                <span style={{ color: "#ffc107" }}>n</span>
                                <span style={{ color: "#1976d2" }}>d</span>
                                <span style={{ color: "#43a047" }}>o</span>
                                <span style={{ color: "#b71c1c" }}>o</span></h1>

                        </div>
                        <div className='register-h2'><h2>Enter your Registered Email</h2></div>
                    </div>
                    <div className='register-names'>

                        <div>
                            <TextField
                                id="outlined-email-input"
                                label="Email"
                                name="email"

                                margin="normal"
                                variant="outlined"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />
                        </div>
                        <div>
                            <Button variant="contained" color="primary"
                                onClick={this.onSubmit}   >
                                Submit
                            </Button>
                        </div>
                        <div className="errorMessage">
                        <span style={{ color: "#b71c1c" }}>{this.state.message}</span>
                        </div>
                    </div>


                </Card>

            </div>
        )
    }
}
