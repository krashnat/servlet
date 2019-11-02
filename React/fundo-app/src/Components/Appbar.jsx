import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { MuiThemeProvider, createMuiTheme, IconButton } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Close'
import SearchIcon from '@material-ui/icons/Search';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import SideNav from '../Components/SideNav';
const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                color: "black",


            },
            height: "48px",
        },
    }
})
export default class Appbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drawer: true,
            drawerClose: false

        }
    }










    handleDrawerOpen = async () => {
        await this.setState({ drawer: !this.state.drawer })
        //this.props.slide(this.state.drawer)

    }
    handleClickCloseAway = () => {
        this.setState({ drawer: false })

        // this.props.slideClose(this.state.drawer)
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="appBar-main">
                    <AppBar >
                        <Toolbar className="appBar-tool" >
                            <div className="fulldiv">

                                <div className="icons">
                                    <div>
                                        < IconButton onClick={this.handleDrawerOpen} >
                                            <MenuIcon />
                                        </ IconButton>
                                        <SideNav menu={this.state.drawer} />
                                    </div>
                                    <div className="logo">
                                        <img width="40px" height="40px" src={require('../Assets/keep.jpg')}></img>
                                    </div>
                                    <span className="name">Fundoo</span>
                                </div>
                                <div className="search">
                                    <div className="searchIcon">
                                        <IconButton >
                                            <SearchIcon />
                                        </IconButton>
                                    </div>
                                    <div className="inputField">
                                        <InputBase
                                            className="inputField"
                                            placeholder="Search....."
                                        //value={this.state.search}
                                        // onChange={this.handleSearch}
                                        // onClick={this.handleSeachState}

                                        />
                                    </div>
                                    <div className="cancelButton">
                                        <IconButton >
                                            <ClearIcon />
                                        </IconButton>
                                    </div>
                                </div>
                                <div className="middleOne">
                                    <div className="refreshIcon">
                                        <IconButton >
                                            <RefreshIcon />
                                        </IconButton>
                                    </div>
                                    <div>
                                        <IconButton >
                                            < FormatListBulletedOutlinedIcon />
                                        </IconButton>

                                    </div>
                                    <div>
                                        <IconButton >
                                            <SettingsOutlinedIcon />
                                        </IconButton>
                                    </div>
                                </div>
                                <div className="lastIcons">
                                    <div>
                                        <IconButton >
                                            <AppsIcon />
                                        </IconButton>
                                    </div>

                                    <div>
                                        <IconButton >
                                            <AccountCircleIcon />
                                        </IconButton>

                                    </div>
                                </div>


                            </div>


                        </Toolbar>

                    </AppBar>

                </div></MuiThemeProvider>
        )
    }
}