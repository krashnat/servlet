import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme, MenuItem, Divider } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const themes = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paperAnchorLeft: {
                width: 250,
                top: 65,
                height: "90%",
                background: 'white',
                overflowY: 'hidden'
            },
            paperAnchorDockedLeft: {
                borderColor: "white",
                borderRight:"1px solid rgba(0, 0, 0, 0)"
            }
        }
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

    }
})

export default class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            close: false,
            colorChange: false,
        }
    }


    render() {
        return (
            <div className="drawer">
                <MuiThemeProvider theme={themes}>
                    <Drawer variant='persistent' overflow='auto' open={this.props.menu} >
                        <div className="firstBtn" >
                            <MenuItem className="btn" style={{ borderBottomRightRadius: "50px 50px", borderTopRightRadius: "50px 50px" }}>
                                <EmojiObjectsOutlinedIcon />
                                <span className="sideNav" >Notes</span>
                            </MenuItem>
                            <MenuItem className="btn" style={{ borderBottomRightRadius: "50px 50px", borderTopRightRadius: "50px 50px" }}>
                                <AddAlertOutlinedIcon />
                                <span className="sideNav" >Reminders</span>
                            </MenuItem>
                        </div>
                        <Divider />
                        <div className="labelTag">LABELS</div>
                        <MenuItem className="btn" style={{ borderBottomRightRadius: "50px 50px", borderTopRightRadius: "50px 50px" }}>
                            <CreateOutlinedIcon />
                            <span className="sideNav" >Edit Labels</span>
                        </MenuItem>
                        <Divider />
                        <MenuItem className="btn" style={{ borderBottomRightRadius: "50px 50px", borderTopRightRadius: "50px 50px" }}>
                            <ArchiveOutlinedIcon />
                            <span className="sideNav" >Archive</span>
                        </MenuItem>
                        <MenuItem className="btn" style={{ borderBottomRightRadius: "50px 50px", borderTopRightRadius: "50px 50px" }}>
                            <DeleteOutlineOutlinedIcon />
                            <span className="sideNav" >Trash</span>
                        </MenuItem>
                    </Drawer>
                </MuiThemeProvider>

            </div>
        )
    }
}
