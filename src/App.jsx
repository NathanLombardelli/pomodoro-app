import './style.css'
import {Title} from "./assets/Title.jsx";
import  {Timer} from "./assets/Timer.jsx"
import {useState} from 'react';
import {TimerStop} from "./assets/TimerStop.jsx";

let minutes = 0;
let secondes = 20;
let initTime = 20 * 1000;
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
    }

    function pause(){
        setVisible(false);
        console.log(visible);
    }

    function play(){
        setVisible(true);
        console.log(visible);
    }

    function complete() {
        setVisible(false);
        console.log(visible);
    }


    function addMinute() {
        if(minutes < 59) {
            time += 60000;
            minutes += 1;
        }
        play();
        pause();
    }

    function reset() {

        time = initTime;

    }
    function removeMinute() {
       if(time > 60000) {
           time -= 60000;
           minutes -= 1;
       }
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
