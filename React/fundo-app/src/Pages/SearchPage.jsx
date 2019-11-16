import React, { Component } from 'react'
import SearchedNotes from '../Components/SearchedNotes'
import App from '../Components/Appbar'

export default class SearchPage extends Component {
    constructor(props){
        super(props)
            this.state={
                searchedNote:[],
            }
        
    }
    notes=(value)=>{
        this.setState({
            searchedNote : value
        })
    }
    render() {
        return (
            <div>
                 <div className="dashboard">
                    <App slide={this.handleSlide} viewprop={this.handleView} appToDisplay={this.notes}></App>
                </div>
                <div className="dashboard-displayNotes">
                        <SearchedNotes notes={this.state.searchedNote}></SearchedNotes>
                    </div>
            </div>
        )
    }
}
