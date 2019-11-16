import React, { Component } from 'react'

import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Button from '@material-ui/core/Button';
import { InputBase,  Tooltip } from '@material-ui/core';

import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';



import Controller from '../Controller/noteController';

export default class Collaborator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            firstName: '',
            lastName: '',
            email: '',
            view: false,
            emailId: '',
            id: '',
            openSnackBar: '',
            Error: false,
            message: "",
            chipOpen: false,
            colbaUserArray: [],
        }
    }

    dialogOpenClose = () => {
        //this.getColabUserDetails()
        //console.log(this.colbaUserArray)
        this.setState({
            open: !this.state.open,

        })
    }

    showIcon = () => {
        this.setState({
            view: !this.state.view
        })
    }

    dialogReset = () => {
        this.setState({
            view: !this.state.view,
            open: !this.state.open
        })
    }

    onChangeEmailId = (event) => {
        this.setState({

            emailId: event.target.value
        })
        // console.log(this.state.emailId)
    }

    snackBarClose = () => {
        this.setState({
            Error: false
        })
    }


    saveColab = () => {
        if (this.state.emailId === '') {
            this.setState({

                Error: true,
                message: 'Please add email address',
                chipOpen: !this.state.open,
            })
        }
        else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.emailId)) {
            this.setState({

                Error: true,
                message: 'Please provide a valid email address'
            })
        }
        else {
            let colabBody = {
                "email": this.state.emailId,
                

            }
           
           // console.log(colabBody)
            Controller.addCollaborator(this.props.noteId,colabBody).then((res) => {
                this.setState({

                    emailId:'',
                    view: !this.state.view
    
                })
                console.log(res.data)
            }).catch((err) => {
                console.log("in error");
                console.log("error", err);
                this.setState({ message: 'failed to load the data' })
            })
            

        }
       

    }

    render() {
        return (
            <div >

                <Tooltip title="Collaborator">
                    <PersonAddOutlinedIcon onClick={this.dialogOpenClose} />
                </Tooltip>


                <Dialog open={this.state.open} style={{ boxShadow: "1px 1px 1px 1px" }} >

                    <DialogTitle >
                        Collaborators
                </DialogTitle>

                    <DialogContent dividers >



                        <div>
                            {!this.state.view ?
                                <InputBase
                                    placeholder="add person"
                                    onClick={this.showIcon}
                                /> :
                                <InputBase
                                    type="email"
                                    placeholder="add person"
                                    value={this.state.emailId}
                                    onChange={this.onChangeEmailId}
                                />}
                            {!this.state.view ? null : <DoneOutlinedIcon onClick={this.saveColab} />}
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.dialogReset} >
                            Cancel
                     </Button>
                        <Button onClick={this.saveColab} >
                            Save
                    </Button>
                    </DialogActions>

                </Dialog>

            </div>
        )
    }
}
