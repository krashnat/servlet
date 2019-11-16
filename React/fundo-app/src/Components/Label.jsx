import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import labelcontroller from '../Controller/labelController';
import { InputBase, TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import controller from '../Controller/labelController';
import DoneIcon from '@material-ui/icons/Done';

// import MenuItem from '@material-ui/core/MenuItem';
// import { Card } from '@material-ui/core';




export default class Label extends Component {

    constructor() {
        super();
        this.state = {
            anchorEl: null,
            setAnchorEl: false,
            labels: [],
            ids: [],
            noteid: '',
            label: ''

        }

    }
    handleClick = (e) => {
        labelcontroller.getAllLabel().then((res) => {
            this.setState({
                labels: res.data.obj,

            })
            console.log(this.state.labels)
        }).catch((err) => {
            console.log("error", err.response.data);
        })
        this.setState({
            anchorEl: this.state.anchorEl ? false : e.target
        });

    };

    handleClose = (e) => {
        this.setState({
            anchorEl: this.state.anchorEl ? false : e.target
        });
    }

    onChangeLabel = (event) => {
        var label = event.target.value;
        this.setState({
            label: label
        })
    
    }

    onSubmit = () => {
        // if (this.state.label === '') {
        //     this.setState({ openDialog: !this.state.openDialog });
        // }
       
            var labelDetails = {
                "name": this.state.label

            }
            controller.createLabelAndMap(labelDetails,this.props.noteId).then((res) => {
                this.props.status(true)
                console.log(res.data);
                this.setState({
                    label: ''
                })
            
                // this.setState({ openDialog: !this.state.openDialog });


            }).catch((err) => {
                console.log("in error");
                console.log("error", err);
                this.setState({ message: 'failed to load the data' })
            })

        

    }


    handleChange = (id) => {
        console.log('label id', id)
        console.log('hello', this.props.noteId)
        controller.addLabel(id, this.props.noteId).then((res) => { 
            console.log(res.data)
            this.props.status(true)
        }).catch((err) => {
            console.log("in error");
            console.log("error", err.data);
            this.setState({ message: 'failed to load the data' })
        });

    }
    render() {



        let getAllLabels = this.state.labels.map((label) => {
            return (
                <div>
                    <div className="listLabel">

                        <div>
                            <Checkbox color="default" value="checked"
                                checked={this.state.checked}
                                onChange={() => this.handleChange(label.labelId)}
                            />
                        </div>
                        <div className="labelInput">
                            <TextField
                                type="text"
                                className="inputField"
                                placeholder="Take Label"
                                value={label.name}

                            />
                        </div>
                        <div>
                     
                        </div>

                    </div>


                </div>
            )
        })

        return (
            <div>

                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(e) => this.handleClick(e)}>
                    Add Label
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    style={{ zIndex: '9999' }}
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                >


                    <div className="labelNote">Label note</div>
                    <div className="spotlabel">
                        <div className="labelInput">
                            <InputBase
                                type="text"
                                className="inputField"
                                placeholder="Enter Label Name"
                                value={this.state.label}
                                onChange={this.onChangeLabel}
                            />
                        </div>

                        <div role="button" onClick={this.onSubmit} className="savebutton">
                            <DoneIcon />
                        </div>
                    </div>
                    {getAllLabels}
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(e) => this.handleClose(e)}>
                        Close
                     </Button>


                </Menu>
            </div>
        );
    }
}
