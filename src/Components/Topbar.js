import React,{useState} from "react";
import ReactDOM  from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard,faUser } from '@fortawesome/free-solid-svg-icons'
import Login from "./Login";
function Navbar(){
    let [isVisible,setVisible] = useState(false);
    function handleLogin(){
        if(isVisible === false){
            setVisible(true);

        }
        else{
            setVisible(false)
        }
    }

    return(
        <div className="nav-div">
            <div className="left-bar">
                <h1 className="heading">Ninja Typer</h1>
                <FontAwesomeIcon className="key-board" icon={faKeyboard} />
            </div>
            <div className="right-bar" onClick={handleLogin}>
                <FontAwesomeIcon className="profile" icon={faUser} />
            </div>
            {isVisible && <Login/>}
            

            
        </div>
    )
}
export default Navbar;