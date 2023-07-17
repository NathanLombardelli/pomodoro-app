import './style.css'
import {Title} from "./assets/Title.jsx";
import  {Timer} from "./assets/Timer.jsx"
import {useState} from 'react';
import {TimerStop} from "./assets/TimerStop.jsx";

var minutes = 0;
var secondes = 0;

let time = 60 * 1000;
//60.000 = 1min

function App() {

    const [visible, setVisible] = useState(true);


    function tick({ timeDelta, completed }) {

        if (!completed) {
            console.log("min : " + timeDelta.minutes);
            console.log("sec : " + timeDelta.seconds);
            minutes = timeDelta.minutes;
            secondes = timeDelta.seconds;
            time = (secondes+(minutes*60)) * 1000;
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
            {visible ? <Timer time={time} tick={tick}></Timer> : <TimerStop timeMin={minutes} timerSec={secondes} ></TimerStop>}
        </div>
        <button onClick={pause}>Pause</button>
        <button onClick={play}>Play</button>
    </>
  )
}

export default App
