import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme, MenuItem, Divider } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import controller from '../Controller/labelController';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import { withRouter } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import CloseIcon from '@material-ui/icons/Close';
import { InputBase, TextField } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';




const themes = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paperAnchorLeft: {
                width: 280,
                top: 65,
                height: "90%",
                background: 'white',
                overflowY: 'hidden'
            },
            MuiSvgIcon: {
                root: {
                    fontSize: "1.2rem"
                }
            },
            paperAnchorDockedLeft: {
                borderColor: "white",
                borderRight: "1px solid rgba(0, 0, 0, 0)"
            }
        }


    }
})

class SideNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            close: false,
            colorChange: false,
            openDialog: false,
            labelsList: [],
            labels: [],
            label: '',
            labelName:'',
            id:'',
            appTitle:'',
            input:false,
        }
    }

    handleDoneLables = async () => {
        var data = {
            "labelName": this.state.labelName,
            "labelId": this.state.id
        }
        await this.setState({
            input: false,
            mouse: false,
            trueIcon: false,
        })
        console.log("Response after hitting updatenoteslabel", data);
      
        controller.updateLabel(data).then((res) => {

            console.log(res.data);
            //this.setState({ openDialog: !this.state.openDialog });


        }).catch((err) => {
            console.log("in error");
            console.log("error", err);
            this.setState({ message: 'failed to load the data' })
        })
    }

    dialogOpen = (listOflabels) => {

        this.setState({
            labels: listOflabels,
            openDialog: !this.state.openDialog,
        })
    }
    renderNote = () => {

        this.props.history.push("/note")

    }
    renderReminderNote = () => {

        this.props.history.push("/reminders")

    }
    renderTrashedNote = () => {

        this.props.history.push("/trashed")

    }

    renderArchiveNote = () => {

        this.props.history.push("/archive")

    }

    componentDidMount() {
        this.getLabels();

    }

    getLabels = () => {
        controller.getAllLabel().then((res) => {
            console.log("labels are",res.data.obj)
            this.setState({
                    
                labelsList: res.data.obj

            })
            console.log(this.state.labelsList);


        }).catch((err) => {
            console.log("in error");
            console.log("error", err.response.data);
            this.setState({ message: 'failed to load the data' })
        })
    }


    onChangeLabel = (event) => {
        var label = event.target.value;
        this.setState({
            label: label
        })

    }

    onSubmit = () => {
        if (this.state.label === '') {
            this.setState({ openDialog: !this.state.openDialog });
        }
        else {
            var labelDetails = {
                "name": this.state.label

            }
            controller.createLabel(labelDetails).then((res) => {


                this.getLabels();
                console.log(res.data);
                this.setState({ openDialog: !this.state.openDialog });


            }).catch((err) => {
                console.log("in error");
                console.log("error", err);
                this.setState({ message: 'failed to load the data' })
            })

        }

    }
    handleEditLabel=(id,name)=>{
        console.log("in handleEditLabel",id,name)
        this.setState({

            labelName:name,
            id:id,
            input:true,
        })
     
    }

    handleLabels=async(labelName,labelId)=>{
        console.log("label is ",labelName,labelId)
        await this.setState({
            appTitle: labelName
        })
        //this.props.history.push(`/labels/${labelName}`,this.state.appTitle)
        this.props.history.push('/notelabels/' + labelId)
    }
    onDelete = (id) => {
        console.log("label id to delete" + id)
        
        var labelDetails = {
            "labelId": id

        }
        // controller.deletLabel(labelDetails)
        controller.deletLabel(labelDetails).then((res) => {
           
            console.log('deleted',res);
            this.getLabels();


        }).catch((err) => {
            console.log("in error");
            console.log("error", err);
            this.setState({ message: 'failed to load the data' })
        })

    }
    handleLabelChange = async (e) => {
        await this.setState({
            labelName: e.target.value
        })
        
    }

    render() {

        let getAllLabel = this.state.labelsList.map((key) => {
            return (
                <MenuItem className="btn" style={{ borderBottomRightRadius: "50px 50px", borderTopRightRadius: "50px 50px" }} key={key.labelId}  onClick={()=>this.handleLabels(key.name,key.labelId)} >
                    <LabelOutlinedIcon style={{ paddingRight: "48px" }} />{key.name}</MenuItem>
            )
        })

        let getAllLabels = this.state.labelsList.map((key) => {
            // console.log("in getAllLabel",key)
            return (
                <div className="labelCard" key={key.labelId}>
                    <div className="tekeLabelCard" >
                        <div role="button"  >
                            <MuiThemeProvider theme={themes}>
                                <DeleteIcon onClick={()=>{this.onDelete(key.labelId)}} />
                            </MuiThemeProvider>
                        </div>

                        {this.state.input && key.labelId === this.state.id ?
                         <div className="labelInput">
                      <TextField
                            id="title"
                            value={this.state.labelName}
                            onChange={this.handleLabelChange}
                        />
                        </div>
                         :

                        <div className="labelInput">
                            <TextField
                                type="text"
                                className="inputField"
                                placeholder="Take Label"
                                value={key.name}
                                onChange={()=>{this.handleEditLabel(key.labelId,key.name)}}
                                
                            />
                        </div>
                         } 
{/*                             
                        <div className="labelInput">
                            <TextField
                                type="text"
                                className="inputField"
                                placeholder="Take Label"
                                value={this.state.labelState}
                                onChange={this.handleEditLabels}
                                
                            />
                        </div> */}
                          
                        <div role="button">
                            <DoneIcon  onClick={this.handleDoneLables}/>
                        </div>
                    </div>
                </div>

            )
        })

        return (
            <div className="drawer">
                <MuiThemeProvider theme={themes}>
                    <Drawer variant='persistent' overflow='auto' open={this.props.menu} >
                        <div className="firstBtn" >
                            <MenuItem className="btn" style={{ borderBottomRightRadius: "50px 50px", borderTopRightRadius: "50px 50px" }} onClick={this.renderNote}>
                                <EmojiObjectsOutlinedIcon />
                                <span className="sideNav" >Notes</span>
                            </MenuItem>
                            <MenuItem className="btn" style={{ borderBottomRightRadius: "50px 50px", borderTopRightRadius: "50px 50px" }} onClick={this.renderReminderNote}>
                                <AddAlertOutlinedIcon />
                                <span className="sideNav" >Reminders</span>
                            </MenuItem>
                        </div>
                        <Divider />
                        <div className="labelTag">LABELS</div>
                        <div>{getAllLabel}</div>
                        <MenuItem className="btn" style={{ borderBottomRightRadius: "50px 50px", borderTopRightRadius: "50px 50px" }} onClick={() => { this.dialogOpen(this.state.labelsList) }}>
                            <CreateOutlinedIcon />
                            <span className="sideNav" >Edit Labels</span>
                        </MenuItem>
                        <Dialog open={this.state.openDialog} >
                            <Card className="label-dialog">
                                <div className="labelCard">
                                    <div className="labelText">Edit Labels</div>
                                    <div className="tekeLabelCard">

                                        <div role="button">
                                            <MuiThemeProvider theme={themes}>
                                                <CloseIcon />
                                            </MuiThemeProvider>
                                        </div>


                                        <div className="labelInput">
                                            <InputBase
                                                type="text"
                                                className="inputField"
                                                placeholder="Take Label"
                                                value={this.state.label}
                                                onChange={this.onChangeLabel}
                                            />
                                        </div>

                                        <div role="button" onClick={this.onSubmit}>
                                            <DoneIcon  />
                                        </div>
                                    </div>
                                </div>
                                {getAllLabels}
                            </Card>
                        </Dialog>
                        <div className="firstBtn">
                            <Divider />
                        </div>
                        <MenuItem className="btn" style={{ borderBottomRightRadius: "50px 50px", borderTopRightRadius: "50px 50px" }} onClick={this.renderArchiveNote}>
                            <ArchiveOutlinedIcon />
                            <span className="sideNav" >Archive</span>
                        </MenuItem>
                        <MenuItem className="btn" style={{ borderBottomRightRadius: "50px 50px", borderTopRightRadius: "50px 50px" }} onClick={this.renderTrashedNote}>
                            <DeleteOutlineOutlinedIcon />
                            <span className="sideNav" >Trash</span>
                        </MenuItem>
                    </Drawer>
                </MuiThemeProvider>

            </div>
        )
    }
}

export default withRouter(SideNav);




 // MuiDrawer: {
        //     paper: {
        //         top: "65px",
        //         display: "table"
        //     },
        //     paperAnchorLeft: {
        //         width: "250px",
        //     },
        //     paperAnchorDockedLeft: {
        //             borderColor: "white"

        //     }
        // }