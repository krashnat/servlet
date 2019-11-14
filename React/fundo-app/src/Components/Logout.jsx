import React, { Component } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import { withRouter } from 'react-router-dom'

import Card from '@material-ui/core/Card';


const styles = theme => ({
    typography: {
        margin: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
      },
});

 class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,


        }
    }

    logout=() => {
        console.log("log out component")
        localStorage.clear();
        this.props.history.push("/login")
       
    }

    handleClick = event => {
        console.log("log out component")
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div>
                <IconButton aria-owns={open ? 'simple-popper' : undefined}
                    aria-haspopup="true"
                    variant="contained"
                    onClick={this.handleClick} >
                    <AccountCircleIcon />
                </IconButton>
                <Popover
                    id="simple-popper"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Card className="logoutCard">
                        <div className="logout">
                            
                         <div>                      
                            <span>
                                you want to Logout ?
           
                            </span>
                         </div>
                         <div className="logoutButton">
                            <Button variant="contained" color="primary" onClick={this.logout} >
                                Logout
                            </Button>
                        </div>


                        </div>
                    </Card>
                </Popover>
            </div>


        )
    }
}
export default withRouter(Logout);