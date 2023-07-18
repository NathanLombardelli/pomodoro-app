import './style.css'
import {Title} from "./assets/Title.jsx";
import  {Timer} from "./assets/Timer.jsx"
import {useState} from 'react';
import {TimerStop} from "./assets/TimerStop.jsx";

let minutes = 1;
let secondes = 0;
let initTime = 60 * 1000;
let time = initTime;
//60.000 = 1min
function App() {

    const [visible, setVisible] = useState();


    function tick({ timeDelta, completed }) {

        if (!completed) {
            minutes = timeDelta.minutes;
            secondes = timeDelta.seconds;
            time = (secondes+(minutes*60)) * 1000;
        }

        document.title = minutes + ' : ' + secondes;

    }

    function pause(){
        setVisible(false);
    }

    function play(){
        setVisible(true);
    }

    function complete() {
        setVisible(false);
    }


    function updatePause() {
        setVisible(true);
        setTimeout(pause,100);
    }

    function addMinute() {
        if(minutes < 59) {
            time += 60000;
            minutes += 1;
        }
        updatePause();
    }

    function reset() {

        time = initTime;
        let totSec = initTime /1000;
        minutes = totSec/60;
        secondes = totSec%60;

        updatePause();

    }
    function removeMinute() {
       if(time > 60000) {
           time -= 60000;
           minutes -= 1;
       }
        updatePause();
    }

    return (
    <>
        <Title text={"Pomodoro App"}/>
        <div id={'clock'}>
            {visible ? <Timer time={time} tick={tick} onComplete={complete}></Timer> : <TimerStop timerMin={minutes} timerSec={secondes} ></TimerStop>}
        </div>
        <div id={'Buttons'}>
            {visible ? <button onClick={addMinute} disabled={true}>+</button> : <button onClick={addMinute}>+</button> }
            {visible ? <button onClick={pause} >Stop</button> : <button onClick={play}>Start</button> }
            {visible ?  <button onClick={reset} disabled={true}>Reset</button> :  <button onClick={reset}>Reset</button> }
            {visible ?  <button onClick={removeMinute} disabled={true}>-</button>:  <button onClick={removeMinute}>-</button> }
        </div>
    </>

  )
}

export default App
