import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from './Components/Registration';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import Verify from './Components/Verify'
import UpdatePassword from './Components/UpdatePassword';
import UserInformation from './Components/UserInformation';
import DashboardPage from '../src/Pages/DashboardPage';
import TrashedNotes from './Pages/TrashedNotesPage';
import ArchiveNotesPage from './Pages/ArchiveNotesPage';
import NotesLabelsDisplay from './Pages/NotesLabelsDisplay';
import ReminderPage from './Pages/ReminderPage';
import SearchPage from './Pages/SearchPage';



class App extends Component {
  render() {
    return (
      <Router>

        <Route path="/register" component={Registration}></Route>
        <Route path="/" exact component={Login}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/forgotPassword" component={ForgotPassword}></Route>
        <Route path="/verify/:token" component={Verify}></Route>
        <Route path="/updatePassword/:token" component={UpdatePassword}></Route>
        <Route path="/inform" component={UserInformation}></Route>
        <Route path="/dashboard" component={DashboardPage}></Route>
        <Route path="/note" component={DashboardPage}></Route>
        <Route path="/trashed" component={TrashedNotes}></Route>
        <Route path="/archive" component={ArchiveNotesPage}></Route>
        <Route path="/notelabels/:labelName" component={NotesLabelsDisplay} ></Route> 
        <Route path="/reminders" component={ReminderPage} ></Route> 
        <Route path="/search" component={SearchPage} ></Route> 

      </Router>





    );
  }
}
export default App;
