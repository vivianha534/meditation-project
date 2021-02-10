import React from "react"
import {useMediaQuery} from "@material-ui/core"
import MeditationScreen from "./container/MeditationScreen"
import TurnScreen from "./container/TurnScreen"

function App() {
  const desktopView = useMediaQuery("(min-width:600px)");

  if(!desktopView){
    return (
      <div>
        <TurnScreen/>
      </div>
    );
  }else{
    return <MeditationScreen/>
  }
}

export default App;
