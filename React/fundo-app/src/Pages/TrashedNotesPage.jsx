import React, { Component } from 'react'
import TrashedNotes from '../Components/TrashedNotes'
import App from '../Components/Appbar'


export default class TrashedNotesPage extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="appbar">
                    <App></App>
                </div>
                <div className="create-display">
                    
                    <div className="dashboard-displayNotes">
                       <TrashedNotes></TrashedNotes>
                    </div>
                </div>

            </div>
        )
    }
}
