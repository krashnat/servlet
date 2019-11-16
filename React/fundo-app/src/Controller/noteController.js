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
    pin(id) {
        console.log('controller',id)
        return axios.post("http://localhost:8080/note/pin/"+id,null,  {
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

    },
    addReminder(data) {
        return axios.post("http://localhost:8080/note/addreminder?noteId="+data.noteId,data, {
            headers: headers
        });
    },
    addCollaborator(noteId,collaborator) {
        console.log(noteId)
        console.log(collaborator.email)
        return axios.post("http://localhost:8080/collaborator/addCollab?noteId="+noteId+"&email="+collaborator.email,null, {
            headers: headers
        });
    },
    removeCollaborator(noteId,collaborator) {
        console.log(noteId)
        console.log(collaborator)
        return axios.delete("http://localhost:8080/collaborator/removeCollab?noteId="+noteId+"&email="+collaborator, {
            headers: headers
        });
    },
    search(title) {
        console.log("controller",title);
        return axios.get("http://localhost:8080/note/search?title="+title, {
            headers: headers
        });
    }
  
}
export default controller;