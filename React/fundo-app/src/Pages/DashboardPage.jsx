import React, { Component } from 'react'
import App from '../Components/Appbar'
import CreateNote from '../Components/CreateNote'
export default class DashboardPage extends Component {
    render() {
        return (
            <div className="dashboard">
                   
                   <App></App>
           <CreateNote></CreateNote>  
            </div>
        )
    }
}
