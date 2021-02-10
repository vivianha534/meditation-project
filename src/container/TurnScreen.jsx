import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Meditation from "../assets/meditation.jpeg"
const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            //portrait
            [theme.breakpoints.down("sm")]: {
                background: "black",
                color: "white",
            },
            width: "100vw",
            height: "100vh",
        },
        wordsContainer: {
            transformOrigin: "bottom left",
            transform: "rotate(90deg)",
            textAlign: "center",
            color: "white",
            width: "90vh",
            marginLeft: "10vw",
        },
        image: {
            transformOrigin: "bottom left",
            transform: "rotate(90deg)",
            height: "20vh",
            marginLeft: "36vw",
            textAlign: "center",
            marginTop: "7vh",
        },

        // eslint-disable-next-line comma-dangle
    })
);

const TurnScreen = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.wordsContainer}>
                <Typography variant="h5">Please Turn Your Phone To Begin</Typography>
                <Typography variant="h6">(Or Expand Your Window)</Typography>
            </div>

            <img className={classes.image} src={Meditation} alt="Person Meditating" />
        </div>
    );
};

export default TurnScreen;
