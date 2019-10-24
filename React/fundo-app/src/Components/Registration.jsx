import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import controller from '../Controller/userController';
import { IconButton, Snackbar } from '@material-ui/core';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            mobNo: '',
            error: false,
            message: ''

        }
    }

    snackBarClose = () => {
        this.setState({ Error: false });
    }
    onChangeName = (event) => {

        var name = event.target.value;
        this.setState({
            name: name
        })
        // console.log("aaaaaaa",this.state.name)
    }
    onChangeEmail = (event) => {

        var email = event.target.value;
        this.setState({
            email: email
        })
    }
    onChangeMobno = (event) => {
        this.setState({
            mobNo: event.target.value
        })
    }
    onChangePassword = (event) => {

        var password = event.target.value;
        this.setState({
            password: password
        })
    }
    onSubmit = () => {
       
        if (this.state.name === "") {
            this.setState({
                Error: true,
                message: "name cannot be empty"
            })
        }

        if (this.state.email === "") {
            this.setState({
                Error: true,
                message: "Email cannot be empty"
            })
        }
        else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)) {
            this.setState({
                Error: true,
                message: 'Please provide a valid email address'
            })
        }

        else if (!/^[6789]\d{9}$/.test(this.state.mobNo)) {
            this.setState({
                Error: true,
                message: 'Please provide a valid mobile no'
            })
        }

        else if (this.state.password === null || this.state.password.length < 4) {
            this.setState({
                Error: true,
                message: "Password should be min 4"
            })
        }
        else {
            var registartionDetails = {
                "name": this.state.name,
                "email": this.state.email,
                "password": this.state.password,
                "mobNo": this.state.mobNo
            }

            // userRegister.then(response => {
            //     console.log(response.data);


            // })
            controller.userRegister(registartionDetails).then((res) => {
                console.log('resp-----', res.data);
                
                    this.props.history.push("/inform")
                

            })
        }
    }

    render() {
        return (

            <div className="registerForm">
                <Card className="formcard">
                <Snackbar
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                        open={this.state.Error}
                        autoHideDuration={2000}
                        onClose={this.snackBarClose}
                        message={<span id="message-id">{this.state.message}</span>}
                        action={
                            <IconButton
                                onClick={this.snackBarClose}>
                                    <CloseOutlinedIcon/>
                            </IconButton>
                        } />
                    <div className="heading">
                        <div className='register-fundoo'><h1 className='register-h1'>
                            <span style={{ color: "#2196f3" }}>f</span>
                            <span style={{ color: "#b71c1c" }}>u</span>
                            <span style={{ color: "#ffc107" }}>n</span>
                            <span style={{ color: "#1976d2" }}>d</span>
                            <span style={{ color: "#43a047" }}>o</span>
                            <span style={{ color: "#b71c1c" }}>o</span></h1>

                        </div>
                        <div className='register-h2'><h2>Create your Fundoo Account</h2></div>
                    </div>
                    <div>
                        <div className='register-names'>

                            <TextField
                                id="outlined-name-input"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                margin="normal"
                                variant="outlined"
                                value={this.state.nameame}
                                onChange={this.onChangeName}
                            />
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
                            <TextField
                                id="outlined-password-input"
                                label="Password"

                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                value={this.state.passwors}
                                onChange={this.onChangePassword}
                            />
                            <div>
                                <TextField
                                    id="outlined-mobno-input"
                                    label="Mob No"

                                    type="text"
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined"
                                    value={this.state.mobNo}
                                    onChange={this.onChangeMobno}
                                />
                            </div>
                            <div>
                                <Button variant="contained" color="primary"
                                    onClick={this.onSubmit} >
                                    Submit
                            </Button>
                            </div>


                        </div>
                    </div>
                </Card>
            </div>


        )
    }
}
export default withRouter(Registration);
