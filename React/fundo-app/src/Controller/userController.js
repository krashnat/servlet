import axios from "axios";
//require('dotenv').config()
// const baseurl = process.env.REACT_APP_BASE_URL
// console.log("url is" + baseurl);
let headers = {
    'Content-Type': 'application/json'

}

var controller={
    userRegister(registrationDetails){
        return axios.post("http://localhost:8080/fundooapp/registration", registrationDetails, {
            headers: headers
        });
    },
    userLogin(loginDetails){
        console.log('cs login---',loginDetails);
        return axios.post("http://localhost:8080/fundooapp/login", loginDetails, {
            headers: headers
        });

    },
    forgotPassword(emailInformation) {
        console.log('email is'+emailInformation.email);
        return axios.post("http://localhost:8080/fundooapp/forgotpassword?email="+emailInformation.email,null,  {
            headers: headers
        });
    },
    updatePassword(passwordInformation,token){
        console.log('in controller'+token);
    
        return axios.put("http://localhost:8080/fundooapp/update/"+token,passwordInformation,  {
            headers: headers
        });

    },
    verify(token){
        console.log('in controller'+token);
    
        return axios.get("http://localhost:8080/fundooapp/verify/"+token,null,  {
            headers: headers
        });

    }
    
    
    
    
}
export default controller;