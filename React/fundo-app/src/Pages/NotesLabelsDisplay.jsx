import React, { Component } from 'react'
import LabelledNotes from '../Components/LabelledNotes'
import App from '../Components/Appbar'
import CreateNote from '../Components/CreateNote'

export default class NotesLabelsDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            labelForNote: '',
            snackbarOpen: false,
            labelid:'',
            allNotes:[]
        }
        console.log('called on sss',this.props.match.params.labelName);
        
    }

    render() {
        return (
           
                <div className="dashboard">
                    <div className="appbar">
                      <App></App>
                    </div>
                    <div className="create-display">
                        <CreateNote></CreateNote>
                        <div className="dashboard-displayNotes">
                        <LabelledNotes labelid={this.props.match.params.labelName}></LabelledNotes>
                        </div>
                    </div>

                </div>
                
          
        )
    }
}
