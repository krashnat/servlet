import axios from "axios";

let headers = {
    'Content-Type': 'application/json'

}

var controller={
    getAllLabel(){
        return axios.get("http://localhost:8080/label/getAllLabel?userId="+1,  {
            headers: headers
        });
    }
}
export default controller;