import React, { Component } from 'react'
import App from '../Components/Appbar'
import CreateNote from '../Components/CreateNote'
import DisplayNotes from '../Components/DisplayNotes';

export default class DashboardPage extends Component {
    constructor(props){
        super(props);
        this.state={
            open:false,
        }
    }
    handleSlide=()=>{
        this.setState({
            open:!this.state.open
        })
    }
    render() {
        return (
            <div className="dashboard">
                <div className="appbar">
                    <App slide={this.handleSlide}></App>
                </div>
                <div className="create-display">
                    <CreateNote></CreateNote>
                    <div className="dashboard-displayNotes">
                        <DisplayNotes menu={this.state.open}></DisplayNotes>
                    </div>
                </div>

            </div>
        )
    }
}
