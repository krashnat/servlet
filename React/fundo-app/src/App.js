import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from './Components/Registration';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import Verify from './Components/Verify'
import UpdatePassword from './Components/UpdatePassword';
import UserInformation from './Components/UserInformation';
import Dashboard from './Components/Dashboard';


class App extends Component {
  render(){
  return (
    <Router>
    <Route path="/" exact component={Registration}></Route>
      <Route path="/register" component={Registration}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/forgotPassword" component={ForgotPassword}></Route>
      <Route path="/verify/:token" component={Verify}></Route>
      <Route path="/updatePassword/:token" component={UpdatePassword}></Route>
      <Route path="/inform" component={UserInformation}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      
    </Router>


// baseURL + `/questionAndAnswerNotes/rate/${parentId}`,data, {


  );
}
}
export default App;
