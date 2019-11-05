import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import controller from '../Controller/noteController';
import { MuiThemeProvider, createMuiTheme, Tooltip } from '@material-ui/core';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const theme = createMuiTheme({
    overrides: {
        MuiInputBase: {
            padding: "12px 8px 7px"

        },
        MuiSvgIcon: {
            root: {
                fontSize: "1.2rem"
            }
        },
        MuiPaper: {
            rounded: {
                borderRadius: "11px"
            }
        }


    }
})

export default class ArchiveNote extends Component {


    constructor(props) {
        super(props);
        this.state = {
            open: false,
            close: false,
            colorChange: false,
            notesList: [],
            anchorEl: '',
            deleteId: ''

        }
    }

    handleClose = () => {
        this.setState({ anchorEl: null });
      };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };


    handleNoteId = async (id) => {
        console.log("Note id-->", id);
        await this.setState({
            deleteId: id
        })
    }

    handleDelete = async () => {
        controller.deleteNote(this.state.deleteId).then((res) => {
            
            console.log(res.data)
            this.getNotes()

        }).catch((err) => {
            console.log("in error");
            console.log("error", err.data);
            this.setState({ message: 'failed to load the data' })
        });
        await this.setState({
            anchorEl: null
        })
    };


    componentDidMount() {
        this.getNotes();

    }

    getNotes = () => {

        controller.getArchiveNotes().then((res) => {
            this.setState({

                notesList: res.data.obj

            })
            console.log(this.state.notesList);


        }).catch((err) => {
            console.log("in error");
            console.log("error", err.response.data);
            this.setState({ message: 'failed to load the data' })
        })
    }

    archive=(id)=>{
        console.log(" in archive",id)
         controller.archiveNote(id).then((res) => {
            
            console.log(res.data)
             this.getNotes()

        }).catch((err) => {
            console.log("in error");
            console.log("error", err.data);
            this.setState({ message: 'failed to load the data' })
        });
    
    }


    render() {
        
        const { anchorEl } = this.state;

        let getAllNotes = this.state.notesList.map((note) => {
           //console.log("noteid is----->", note.id);
            return (
                <div key={note.id}>
                    <MuiThemeProvider theme={theme} >
                        <div >
                            <Card className="display-card"  >
                                <div className="notecardtittle">
                                    {note.title}
                                </div >
                                <div className="notecardDescription">
                                    {note.description}
                                </div>

                                <MuiThemeProvider theme={theme}>
                                    <div>
                                        <div className="buttons">
                                            <div>
                                                <Tooltip title="reminder">
                                                    <IconButton aria-label="reminder" className="iconButtons">
                                                        <AddAlertIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </div>
                                            <div>
                                                <Tooltip title="collaborator">
                                                    <IconButton aria-label="reminder">
                                                        <PersonAddIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </div>
                                            <div>
                                                <Tooltip title="collaborator">
                                                    <IconButton aria-label="collaborator">
                                                        <PersonAddIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </div>
                                            <div>
                                                <Tooltip title="colour">
                                                    <IconButton aria-label="colour">
                                                        <PaletteOutlinedIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </div>
                                            <div>
                                                <Tooltip title="Unarchive">
                                                    <IconButton aria-label="Archive">
                                                        <ArchiveOutlinedIcon  onClick={() => this.archive(note.id)}/>
                                                    </IconButton>
                                                </Tooltip>
                                            </div>
                                            <div>
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
                                                    <MenuItem onClick={this.addLabel}>Add Label</MenuItem>
                                                </Menu>

                                            </div>
                                        </div>
                                    </div>
                                </MuiThemeProvider>

                            </Card>
                        </div>
                    </MuiThemeProvider>
                </div>
            )
        })
        return (
            <div className="get-Archive-cards">
                {getAllNotes}
            </div>
        )
    }
}
