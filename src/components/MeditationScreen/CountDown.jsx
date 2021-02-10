import React from "react"
import { Timer } from 'react-countdown-clock-timer';
import PauseButton from './PauseButton'
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        timerNonZero:{
            paddingTop:"5vh",
            paddingLeft:"2.5vw",
            fontSize: "30px",
            color: "white",
        },
        timerZero:{
            paddingLeft: "4vw",
            paddingTop: "5vh",
            fontSize: "30px",
            color: "white,"
        },
        // eslint-disable-next-line comma-dangle
    })
);

const CountDown = ({timeDuration, pauseStatus, setPauseStatus, setTimeClicked}) => {
    const classes = useStyles()
    const minutes = timeDuration.minutes
    const nonZero = minutes != undefined;

    const convertToSeconds = (i) =>{
        let duration;
        if(i){
            duration = minutes * 60
        }else{
            duration = 0;
        }
        return duration
    }

    return(
        <div>
            <PauseButton pauseStatus = {pauseStatus} setPauseStatus = {setPauseStatus} minutes = {minutes}/>
            <div className={nonZero ? classes.timerNonZero: classes.timerZero}>
            <Timer
                durationInSeconds={convertToSeconds(minutes)}
                formatted={true}
                isPaused={pauseStatus}
                onFinish = {()=> {
                    setPauseStatus(true)
                    setTimeClicked(3)
                  }}
            />
            </div>
        </div>
    )
}

export default CountDown