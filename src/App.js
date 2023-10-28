import React,{useState} from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Navbar from "./Components/Topbar";
import Home from "./pages/Home";
import { Routes,Route } from "react-router-dom/dist";




function App(){
   
    return (
        <div>
           <Navbar/>
           <Routes>
                <Route path="/" element={ <Home/>}></Route>
           </Routes>
          
        </div>
    )
}
export default App;