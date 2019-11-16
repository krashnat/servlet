import React, { Component } from 'react'
import {  ClickAwayListener } from '@material-ui/core';
import { DateTimePicker } from 'material-ui-pickers';
import Popper from '@material-ui/core/Popper';
import 'date-fns';
import DateFnsUtils from "@date-io/date-fns";
import Paper from '@material-ui/core/Paper';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import controller from '../Controller/noteController';


export default class Reminder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openPop: false,
            anchorEl: false,
            selectedDate: new Date(),
            close:false,
            reminder:false
        }
    }
    handleClickAway = () => {
        this.setState({
            anchorEl:false
        })
    }

    handleChangeDate = async (date) => {
        console.log("change in reminder", date);
        await this.setState({
            selectedDate: date
            
        })
        
         console.log("change in reminder121CD", this.state.selectedDate);
        //this.props.reminderNote(this.state.selectedDate)
         console.log("reminder-notesId:", this.props.noteId);
        let data = {
            "noteId": this.props.noteId,
            "reminder": this.state.selectedDate
        }
        this.setState({
            anchorEl: false,
            selectedDate:date

        })
        console.log(data)
        controller.addReminder(data).then((res) =>{
             console.log(res.data) 
             this.props.reminderStatus(true)
        }).catch((err) => {
            console.log("in error");
            console.log("error", err.data);
            this.setState({ message: 'failed to load the data' })
        });

        
    }
    handleOpenPopper=async(e)=> {
        await this.setState({
            anchorEl: this.state.anchorEl ? false : e.target
        })
    }
    render() {
        
        return (
            <div>
                <div >
                
                   
                        <ClickAwayListener onClickAway={this.handleClickAway}>
                            <AddAlertOutlinedIcon onClick={(e) => this.handleOpenPopper(e)} />
                        </ClickAwayListener>
                   
            
                    <Popper open={this.state.anchorEl} anchorEl={this.state.anchorEl}
                        style={{ marginTop: "5px", zIndex: "1300" }}>
                        <Paper className="reminder-paper">
                            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                <DateTimePicker style={{ padding: "5px", width: "175px" }}
                                    value={this.state.selectedDate}
                                    onChange={this.handleChangeDate}
                                    InputProps={{
                                        disableUnderline: true 
                                    }}
                                >
                                </DateTimePicker>
                            </MuiPickersUtilsProvider>
                        </Paper>
                    </Popper>
                </div>
            </div>
        )
    }
}
