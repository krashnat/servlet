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
    },
    updateNote(noteDetails){
        console.log(noteDetails)
        return axios.put("http://localhost:8080/note/update/", noteDetails, {
            headers: headers
        });
    },
    deleteNote(id) {
        //console.log('note id',id)
        return axios.delete("http://localhost:8080/note/delete/"+id,  {
            headers: headers
        });

    },
    archiveNote(id) {
        //console.log('note id',id)
        return axios.post("http://localhost:8080/note/archieve/"+id,null,  {
            headers: headers
        });

    },
    deleteNotePermenently(id) {
        console.log('note id',id)
        return axios.delete("http://localhost:8080/note/deletenote/"+id,  {
            headers: headers
        });

    },

    getTrasheNotes(){
        return axios.get("http://localhost:8080/note/fetchTrashedNote",  {
            headers: headers
        });
    },
    getArchiveNotes(){
        return axios.get("http://localhost:8080/note/fetcharchivenote",  {
            headers: headers
        });
    },
    getNotefromLabel() {
        return axios.get("http://localhost:8080/label/getLabelNotes",  {
            headers: headers
        });
    },
    addColour(colour,data) {
        console.log(colour)
        console.log(data.id)
        return axios.post("http://localhost:8080/note/addColour?noteId="+data.id+"&colour="+colour,null, {
            headers: headers
        });

    }
  
}
export default controller;