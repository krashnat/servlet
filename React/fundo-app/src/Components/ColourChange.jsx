import React, { Component } from 'react'
import { Tooltip, IconButton, Popper, Paper,  } from '@material-ui/core'
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import controller from '../Controller/noteController';

const colorPalette = [{ name: "default", colorCode: "#FDFEFE" },
{ name: "Red", colorCode: "#ef9a9a" },
{ name: "Cyan", colorCode: "#80deea" },
{ name: "Blue", colorCode: "#2196f3" },
{ name: "Indigo", colorCode: "#9fa8da" },
{ name: "LightBlue", colorCode: "#90caf9" },
{ name: "Purple", colorCode: "#b39ddb" },
{ name: "Yellow", colorCode: "#c5e1a5" },
{ name: "Lime", colorCode: "#e6ee9c" },
{ name: "Pink", colorCode: "#f48fb1" },
{ name: "gray", colorCode: "#eeeeee" },
{ name: "Brown", colorCode: "#bcaaa4" },
]
    


export default class ColourChange extends Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: false,
            note: props.note,
            colour: '',
        }
    }

    handleClick(event) {
        this.setState({
            anchorEl: this.state.anchorEl ? false : event.target
        });
    };


 handleClose = () => {
    this.setState({ anchorEl: null });
  };

     handleClickAway = () => {
        this.setState({
            anchorEl: false
        })
      };
   

    handleChangeColor = (colour) => {
       
    
        console.log(this.state.note);
        console.log('colour',colour)
         controller.addColour(colour.target.value,this.state.note)
         .then(res=>{
            console.log(res.data);
            this.props.colourStatus(true)
            
        }).catch(err=>{
            console.log("Error after hitting login api  ",err);
        })
        this.setState({
            anchorEl:false
        })
    }

    render() {

       
        const colorChange = colorPalette.map((key) => {
            return (
                <div  key={key.colorCode} className="color-map">
                    <Tooltip title={key.name}>
                        <IconButton style={{ backgroundColor: key.colorCode, border: "silver 2px solid" }}
                            value={key.name}
                             onClick={this.handleChangeColor}
                            >
                        </IconButton>
                    </Tooltip>
                </div>
            )
        })

    return (
        <div>
            <Tooltip title="change color">
                <ColorLensOutlinedIcon onClick={(event) => this.handleClick(event)} cursor="pointer" />
            </Tooltip>
            <Popper open={this.state.anchorEl} anchorEl={this.state.anchorEl}
            style={{
                zIndex: "9999"
            }}
        >
            <Paper className="color-styles">
                {colorChange}
            </Paper>
        </Popper>
        </div>
    )
}
}
