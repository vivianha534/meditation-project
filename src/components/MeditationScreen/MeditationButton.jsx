import { makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button"
import NatureIcon from '@material-ui/icons/Nature';
import WavesOutlinedIcon from '@material-ui/icons/WavesOutlined';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

const useStyles = makeStyles((theme) =>
    createStyles({

        root: {
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            border: 0,
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
            width: "10vw",
          },
        forrest:{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
            width: "10vw",
        },
        ocean:{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
            width: "10vw",
        },
        rain:{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
            width: "10vw",
        },
        [theme.breakpoints.between("sm", "lg")]: {
            root:{
                width: "16vw",
                height: "9vh",
                marginLeft: "-5vw",
                paddingRight: "5vw",
                backgroundColor:"red"
            },
            forrest:{
                width: "16vw",
                height: "9vh",
                marginLeft: "-5vw",
                backgroundColor:"red"
            },
            ocean:{
                width: "16vw",
                height: "9vh",
                marginLeft: "-5vw",
                backgroundColor:"red"
            },
            rain:{
                width: "16vw",
                height: "9vh",
                marginLeft: "-5vw",
                backgroundColor:"red"
            }
        },
        // eslint-disable-next-line comma-dangle
    })
);

const MeditationButton = ({meditationName, id, setMeditationCategory, meditationCategory}) => {
    const classes = useStyles()
    const meditationIsChosen = meditationCategory == id

    const icon = (i) => {
        let icon;
        switch(i.id){
            case 0:
                icon = <NatureIcon/>
                break
            case 1:
                icon = <WavesOutlinedIcon/>
                break
            case 2:
                icon = <InvertColorsIcon/>
                break
        }
        return icon
    }

    const buttonClickedChangeColor = (i) =>{
        let meditationNameClicked;
        switch(i.id){
            case 0:
                meditationNameClicked = classes.forrest
                break
            case 1:
                meditationNameClicked = classes.ocean
                break
            case 2:
                meditationNameClicked = classes.rain
                break
        }
        return meditationNameClicked
    }

    const handleMeditationCategory =()=>{
        setMeditationCategory(id)
    }
    return(
        <div>
            <Button
                endIcon={icon({id})}
                variant = "contained"
                className = {meditationIsChosen ? buttonClickedChangeColor({id}) : classes.root}
                onClick = {handleMeditationCategory}
            >
                {meditationName}
            </Button>
        </div>
    )
}

export default MeditationButton