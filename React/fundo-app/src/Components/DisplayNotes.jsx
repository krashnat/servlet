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

export default class DisplayNotes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            close: false,
            colorChange: false,
            notesList: [],
            anchorEl: null,
        }
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };


    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    componentDidMount() {
        this.getNotes();

    }

    getNotes = () => {
        controller.getNotes().then((res) => {
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



    render() {

        let getAllNotes = this.state.notesList.map((key, index) => {
            return (
                <MuiThemeProvider theme={theme}>
                    <Card key={key.index} className="display-card">
                        <div className="notecardtittle">
                            {key.title}
                        </div >
                        <div className="notecardDescription">
                            {key.description}
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
                                        <Tooltip title="Archive">
                                            <IconButton aria-label="Archive">
                                                <ArchiveOutlinedIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                    <div>
                                        <Tooltip title="More">
                                            <IconButton aria-label="Archive" >
                                                <MoreVertIcon />
                                            </IconButton>
                                        </Tooltip>

                                    </div>

                                </div>

                            </div>
                        </MuiThemeProvider>



                    </Card>
                </MuiThemeProvider>
            )
        })
        return (
            <div className="get-cards">
                {getAllNotes}
            </div>
        )
    }
}
