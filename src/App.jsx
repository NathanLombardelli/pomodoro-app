import './style.css'
import {Title} from "./assets/Title.jsx";
import  {Timer} from "./assets/Timer.jsx"
import React, {useState} from 'react';
import ReactDOM from "react-dom/client";
import {TimerStop} from "./assets/TimerStop.jsx";

var minutes = 1;
var secondes = 36;

function App() {

    const [visible, setVisible] = useState(true);

    function tick({ timeDelta, completed }) {

        if (!completed) {
            minutes = timeDelta.minutes;
            secondes = timeDelta.seconds;
        }
    }

    function pause(){

        setVisible(false);

    }

    function play(){


        setVisible(true);

    }


  return (
    <>
        <Title text={"Hello World"}/>
        <div id={'clock'}>
            {visible ? <Timer time={minutes} tick={tick}/> : <TimerStop timerMin={minutes} timersec={secondes} ></TimerStop>}
        </div>
        <button onClick={pause}>Pause</button>
        <button onClick={play}>Play</button>
    </>
  )
}

export default App
