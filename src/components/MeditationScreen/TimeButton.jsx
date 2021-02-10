import React, {useState} from "react"
import Button from "@material-ui/core/Button"
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        timeButton:{
            minWidth: "8vw",
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
        },
        two:{
            minWidth: "8vw",
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
        },
        five:{
            minWidth: "8vw",
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
        },
        ten:{
            minWidth: "8vw",
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
        },
        [theme.breakpoints.between("sm", "lg")]: {
            timeButton:{
                width: "16vw",
                height: "9vh",
                marginLeft: "-5vw",
                backgroundColor:"red"
            },
            two:{
                width: "16vw",
                height: "9vh",
                marginLeft: "-5vw",
                backgroundColor:"red"
            },
            five:{
                width: "16vw",
                height: "9vh",
                marginLeft: "-5vw",
                backgroundColor:"red"
            },
            ten:{
                width: "16vw",
                height: "9vh",
                marginLeft: "-5vw",
                backgroundColor:"red"
            }
        },
        // eslint-disable-next-line comma-dangle
    })
);

const TimeButton = ({minutes, setTimeDuration, id, clicked, setClicked}) =>{
    const classes = useStyles()

    const timeIsChosen = clicked.id == id

    const handleTimeClick = () => {
        setTimeDuration({minutes})
        setClicked({id})
    }

    const buttonClickedChangeColor = (i) =>{
        let timeNameClicked;
        switch(i.id){
            case 0:
                timeNameClicked = classes.two
                break
            case 1:
                timeNameClicked = classes.five
                break
            case 2:
                timeNameClicked = classes.ten
                break
        }
        return timeNameClicked
    }

    return(
        <Button className = {timeIsChosen ? buttonClickedChangeColor({id}) : classes.timeButton} onClick = {handleTimeClick}>
            {minutes} Minutes
        </Button>
    )
}

export default TimeButton