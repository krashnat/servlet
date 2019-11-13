import React, { Component } from 'react'
import App from '../Components/Appbar'
import CreateNote from '../Components/CreateNote'

import ReminderNotes from '../Components/ReminderNotes';

export default class ReminderPage extends Component {
    constructor(props){
        super(props);
        this.state={
            open:false,
            view: false,
        }
    }
    handleSlide=()=>{
        this.setState({
            open:!this.state.open
        })
    }
    handleView=(isTrue)=>{
        this.setState({
            view:!this.state.view
        })
    }
    render() {
        return (
            <div className="dashboard">
                <div className="appbar">
                    <App slide={this.handleSlide} viewprop={this.handleView}></App>
                </div>
                <div className="create-display">
                    <CreateNote></CreateNote>
                    <div className="dashboard-displayNotes">
                        <ReminderNotes menu={this.state.open} viewprop={this.state.view}></ReminderNotes>
                    </div>
                </div>

            </div>
        )
    }
}


