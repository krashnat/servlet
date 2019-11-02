import React, { Component } from 'react'
import App from '../Components/Appbar'
import CreateNote from '../Components/CreateNote'
import DisplayNotes from '../Components/DisplayNotes';

export default class DashboardPage extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="appbar">
                    <App></App>
                </div>
                <div className="create-display">
                    <CreateNote></CreateNote>
                    <div className="dashboard-displayNotes">
                        <DisplayNotes></DisplayNotes>
                    </div>
                </div>

            </div>
        )
    }
}
