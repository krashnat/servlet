import axios from "axios";


let headers = {
    'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
}

var controller={
    createNote(noteInformation){
        console.log(noteInformation);
        return axios.post("http://localhost:8080/note/create", noteInformation, {
            headers: headers
        });
    },
      

    getNotes(){
        return axios.get("http://localhost:8080/note/fetchNote",  {
            headers: headers
        });
    }
}
export default controller;