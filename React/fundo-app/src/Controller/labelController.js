import axios from "axios";

let headers = {
    'Content-Type': 'application/json'

}

var controller={
    userRegister(registrationDetails){
        return axios.get("http://localhost:8080/label/getAllLabel?userId="+1, registrationDetails, {
            headers: headers
        });
    }
}
export default controller;