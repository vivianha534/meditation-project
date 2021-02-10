import React from 'react'
import ReactPlayer from 'react-player'
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        reactPlayer: {
            height: "100vh",
            width: "100vw",
        }
    })
);


const MeditationPlayer = ({meditationIdx, meditationInfo, pauseStatus, timeDuration}) =>{
    const classes = useStyles()
    const minutes = timeDuration.minutes

    return(
        <div className = {classes.reactPlayer}>
            <ReactPlayer 
                url= {meditationInfo[meditationIdx]} 
                playing = {minutes != undefined && !pauseStatus}
                width= "100vw"
                height = "100vh"
            />
        </div>
    )
}

export default MeditationPlayer