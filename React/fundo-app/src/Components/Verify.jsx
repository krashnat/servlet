import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import controller from '../Controller/userController';

export default class Verify extends Component {
    constructor(props) {
        super(props);
        this.state = {

            newPassword: '',
            confirmPassword: '',
            Error: false,
            message: ""
        }
    }
    onSubmit = () => {
        let token = this.props.match.params.token;
        controller.verify(token).then((res) => {
            this.props.history.push("/login")
        }).catch((err) => {
            console.log("in eror");
            console.log("error", err.response)
            // var msg = err.response.data.message
            //this.setState({ message:'something went wrong' })

        })


    }

    render() {
        return (
            <div className="verifyPage">
                <h1 style={{ color: "blue" }}
                >Click on verify Button</h1>
                <Button variant="contained" color="primary" onClick={this.onSubmit} >
                    Verify
                    </Button>

            </div>
        )
    }
}

