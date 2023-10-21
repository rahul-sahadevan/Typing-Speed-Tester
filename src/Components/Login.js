import React,{useState} from "react";

function Login(){
    let [login,setLogin] = useState(false);
    function handleLogin1(){
        setLogin(true)
    }
    function handleLogin2(){
        setLogin(false);
    }
    return (
        <div className="login-div">
            <div className="login-google">
                <button className="login" onClick={()=>{
                    handleLogin1();
                }}>Login</button>
                <button className="signup" onClick={handleLogin2}>Sign Up</button>
            </div>
            {

               login && <div className="details">
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    
                </div>
            }
            {
                !login && <div className="details">
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input> 
                    <input type="password" placeholder="Confirm Password"></input>
                </div>
            }
            
            <div className="log-btns">
                <button className="login-btn">Login</button>
                <p className="or">OR</p>
                <button className="login-google-btn">Sign in with Google</button>
            </div>
        </div>
    )
}
export default Login;