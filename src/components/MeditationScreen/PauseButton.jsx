import React from "react"
import IconButton from '@material-ui/core/IconButton';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {useMediaQuery} from "@material-ui/core"
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        pauseButton:{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
        },
        startButton:{
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            color: 'white',
        },
        [theme.breakpoints.down("md")]:{
            pauseButton:{
                marginTop: "10vh",
                marginLeft: "-1vw",
            },
            startButton:{
                marginTop: "10vh",
                marginLeft: "-1vw",
            }
        }
        
        // eslint-disable-next-line comma-dangle
    })
);

const PauseButton = ({pauseStatus, setPauseStatus, minutes}) => {
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down("md"));

    const classes = useStyles()

    const handlePauseStatus = () =>{
        setPauseStatus(!pauseStatus)
    }

    console.log(pauseStatus)
    console.log(minutes)
    if(pauseStatus || minutes == undefined){
        return(
            <div>
                <IconButton className={classes.startButton} onClick = {handlePauseStatus}>
                    <PlayArrowIcon style={mobileView ? {fontSize: 80} :{fontSize: 120}}/>
                </IconButton>
            </div>
        )
    } else{
        return(
            <div>
                <IconButton className = {classes.pauseButton} onClick = {handlePauseStatus}>
                    <PauseIcon style={mobileView ? {fontSize: 80} :{fontSize: 120}}/>
                </IconButton>
            </div>
        )
    }
}

export default PauseButton