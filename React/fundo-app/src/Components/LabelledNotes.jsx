import React, { Component } from 'react'
//import labelcontroller from '../Controller/labelController';
import controller from '../Controller/noteController';
import Card from '@material-ui/core/Card';
import { MuiThemeProvider, createMuiTheme, Tooltip } from '@material-ui/core';
// import controller from '../Controller/noteController';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import ColourChange from '../Components/ColourChange';
import Collaborator from '../Components/Collaborator';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';


const theme = createMuiTheme({
    overrides: {
        MuiInputBase: {
            padding: "12px 8px 7px"

        },
        MuiBackdrop: {
            backgroundcolor: "none"
        },

        MuiSvgIcon: {
            root: {
                fontSize: "1.2rem"
            }
        },
        root: {
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
        },
        chip: {
            // margin: createMuiTheme.spacing.unit
        },

        MuiPaper: {
            rounded: {
                borderRadius: "11px"
            }
        }


    }
})


export default class LabelledNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allNotes: [],

        }
        console.log(this.props.labelName + " at more vert ");

    }
    componentDidMount() {
        this.getNotes();


    }

    getNotes = () => {
        controller.getNotes().then((res) => {
            this.setState({

                allNotes: res.data.obj

            })
            console.log(this.state.allNotes);


        }).catch((err) => {
            console.log("in error");
            console.log("error", err.response.data);
            this.setState({ message: 'failed to load the data' })
        })
    }



    handleColourStatus=(colourStatus) =>{
        if(colourStatus){
            console.log(colourStatus);
            this.getNotes();
        }
    }
    
    render() {


        let getAllNote = this.state.allNotes.map((key) => {
            console.log(key);

            return (


                <div key={key.id}>

                    {key.list.map((label) => {
                        console.log(label.labelId, parseInt(this.props.labelid));

                        return (<div key={label.labelId}>{label.labelId === parseInt(this.props.labelid) ?
                            <MuiThemeProvider theme={theme} >

                                <Card className="display-card" style={{ backgroundColor: key.colour }}>
                                    <div>
                                        <div className="notecardtittle">

                                            {key.title}

                                        </div>
                                        <div className="notecardDescription">
                                            {key.description}
                                        </div>
                                    </div>
                                    <MuiThemeProvider theme={theme}>

                                        <div className="buttons">
                                            <div>
                                                <Tooltip title="reminder">
                                                    <IconButton aria-label="reminder" className="iconButtons">
                                                        <AddAlertIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </div>
                                            <div className="botombuttons">

                                        <Collaborator noteId={key.id}></Collaborator>

                                    </div>
                                    <div className="botombuttons">

                                        <ColourChange note={key}  colourStatus={this.handleColourStatus} />

                                    </div >
                                            <div>
                                                <Tooltip title="Archive">
                                                    <IconButton aria-label="colour" >
                                                        <ArchiveOutlinedIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </div>
                                            {/* <div>
                                        <Tooltip title="More"  >
                                            <IconButton
                                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                                aria-haspopup="true"
                                                onClick={this.handleClick}

                                            >
                                                <MoreVertIcon onClick={() => this.handleNoteId(note.id)} />
                                            </IconButton >
                                        </Tooltip>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl)}
                                            onClose={this.handleClose}
                                        >
                                            <MenuItem onClick={() => this.handleDelete()}>Delete</MenuItem>
                                            {/* <MenuItem onClick={(e)=>this.addLabel(e)}>Add Label</MenuItem> */}
                                            {/* <Label noteId={this.state.deleteId} ></Label> */}
                                            {/* </Menu> */}

                                            {/* </div> */}
                                        </div>

                                    </MuiThemeProvider>


                                </Card>
                            </MuiThemeProvider> : ''}
                        </div>);

                    })}
                </div>





            )
        })

        return (
            <div className="get-cards">
                {getAllNote}
            </div>)
    }
}
