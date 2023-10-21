import React,{useState} from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Navbar from "./Components/Topbar";
import Timersetting from "./Components/Timer";
import Typerbox from "./Components/Typerspace";
import Randompara from "./Components/Randompara";
import Changepara from "./Components/Changepara";
import Footer from "./Components/Footer";




function App(){
    const [timerange, setTimerrange] = useState(15);
    const [timeEnd,setTimeEnd] = useState(false);
    return (
        <div>
            
           <Navbar/>
           <Timersetting setTimerrange={setTimerrange} setTimeEnd={setTimeEnd} />
           <Typerbox timerange={timerange} timeEnd={timeEnd} />
            <Randompara/>
            <Changepara/>
            <Footer/>
        </div>
    )
}
export default App;