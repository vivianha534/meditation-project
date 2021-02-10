import React, { useState } from "react"
import TimeButton from "../components/MeditationScreen/TimeButton"
import CountDown from "../components/MeditationScreen/CountDown"
import { makeStyles, createStyles } from "@material-ui/core/styles";
import MeditationButton from "../components/MeditationScreen/MeditationButton"
import MeditationPlayer from '../components/MeditationScreen/MeditationPlayer'

const useStyles = makeStyles((theme) =>
    createStyles({
        meditationScreen:{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "row",
        },
        timeButtons:{
            display: "flex",
            flexDirection: "column",
            height: "40vh",
            justifyContent: "space-between",
            marginTop: "35vh",
            marginLeft: "10vw",
            width: "10vw",
        },
        pauseButton:{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "25vw",
        },
        meditationButtons:{
            display: "flex",
            flexDirection: "column",
            height: "40vh",
            justifyContent: "space-between",
            marginTop: "35vh",
            marginLeft: "30vw",
        },
        meditationPlayer:{
            height: "100vh",
            width: "100vw",
            float: "left",
            top: "0",
            padding: "none",
            position: "fixed",
            zIndex: "-10",
        }
        // eslint-disable-next-line comma-dangle
    })
);

const minutes = [
    2, 5, 10
]

const meditationNames = ["forrest", "ocean", "rain"]

const meditationInfo = [
    //Forrest
    "https://www.youtube.com/watch?v=3TNK916Pjto&ab_channel=HawaiiASMRNatureRelaxation",
    //Ocean
    "https://www.youtube.com/watch?v=btmjDyff6E8&t=16s&ab_channel=NaturalezaViva-SonidosyPaisajesIncre%C3%ADbles",
    //Rain
    "https://www.youtube.com/watch?v=mPZkdNFkNps&t=4s&ab_channel=RelaxingAmbienceASMR"
]

const MeditationScreen = () =>{
    const classes = useStyles()
    const [timeDuration, setTimeDuration] = useState(0)
    //handles which time option was clicked
    const [timeClicked, setClicked] = useState(3)
    const [meditationCategory, setMeditationCategory] = useState(0)
    const [pauseStatus, setPauseStatus] = useState(true)
    

    return(
        <div className = {classes.meditationScreen}>
            <div className = {classes.timeButtons}>
                {minutes.map((minute, idx) => (
                    <TimeButton 
                        minutes = {minute} 
                        setTimeDuration={setTimeDuration} 
                        id={idx} 
                        clicked = {timeClicked} 
                        setClicked={setClicked}
                    />
                ))}
            </div>
            <div className = {classes.pauseButton}>
                <CountDown 
                    timeDuration = {timeDuration} 
                    pauseStatus = {pauseStatus} 
                    setPauseStatus = {setPauseStatus} 
                    setTimeClicked={setClicked}
                />
            </div>
            <div className ={classes.meditationButtons}>
                {meditationNames.map((meditation, idx) => (
                    <MeditationButton 
                        meditationName = {meditation} 
                        id = {idx} 
                        setMeditationCategory = {setMeditationCategory}
                        meditationCategory={meditationCategory}
                    />
                ))}
            </div>
            <div className = {classes.meditationPlayer}>
                <MeditationPlayer 
                    timeDuration={timeDuration} 
                    meditationIdx = {meditationCategory} 
                    meditationInfo = {meditationInfo} 
                    pauseStatus = {pauseStatus}
                />
            </div>
        </div>
    )
}

export default MeditationScreen