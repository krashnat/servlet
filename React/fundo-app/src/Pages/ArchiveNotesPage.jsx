import React, { Component } from 'react'
import ArchiveNote from '../Components/ArchiveNote'
import App from '../Components/Appbar'


export default class ArchiveNotesPage extends Component {
    render() {
        return (
            <div className="dashboard">
            <div className="appbar">
                <App></App>
            </div>
            <div className="create-display">
                
                <div className="dashboard-displayNotes">
                   <ArchiveNote></ArchiveNote>
                </div>
            </div>

        </div>
        )
    }
}
