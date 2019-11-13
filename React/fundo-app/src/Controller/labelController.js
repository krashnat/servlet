import axios from "axios";

let headers = {
    'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
}


var controller={
    getAllLabel(){
        return axios.get("http://localhost:8080/label/getAllLabel",  {
            headers: headers
        });
    },
    createLabel(labelInformation){
        return axios.post("http://localhost:8080/label/create",labelInformation,{
            headers: headers
        });
    },
    updateLabel(labelInformation){
        console.log(labelInformation)
        return axios.put("http://localhost:8080/label/update",labelInformation,{
            headers: headers
        });
    },
    deletLabel(labelDetails){
        console.log('11111111---',labelDetails)
         return axios.post("http://localhost:8080/label/delete",labelDetails,{
            headers: headers
        })
    },
    addLabel(labelDetail,noteid) {

        return axios.post("http://localhost:8080/label/addlabel?labelId="+labelDetail+"&noteId="+noteid,null,{
            headers: headers
        })
    },
    removeLabel(labelDetail,noteid) {

        return axios.post("http://localhost:8080/label/removelabel?labelId="+labelDetail+"&noteId="+noteid,null,{
            headers: headers
        })
    }
}
export default controller;