import React,{useState} from "react";
import Timersetting from "../Components/Timer";
import Typerbox from "../Components/Typerspace";
import Footer from "../Components/Footer";

function Home(){
    const [timerange, setTimerrange] = useState(15);
    const [timerStart,setTimerstart] = useState(false);

    return (
        <div>
            <Timersetting setTimerrange={setTimerrange} timerStart={timerStart}  setTimerstart={setTimerstart}/>
            <Typerbox timerange={timerange}  timerStart={timerStart} />
            <Footer/>
        </div>
    )
}
export default Home