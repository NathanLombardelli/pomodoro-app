import './style.css'
import {Title} from "./assets/Title.jsx";
import  {Timer} from "./assets/Timer.jsx"

function App() {

  return (
    <>
        <Title text={"Hello World"}/>
        <Timer time={25}></Timer>
    </>
  )
}

export default App
