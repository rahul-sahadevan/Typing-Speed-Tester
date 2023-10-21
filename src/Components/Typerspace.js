
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React,{useState,useEffect} from "react";


let obj = [
    {
        text:'The sun slowly set on the horizon casting a warm golden glow across the tranquil lake Birds chirped in the trees as a gentle breeze rustled the leaves The air was filled with the scent of blooming flowers and the world seemed to slow down inviting a sense of calm A couple walked hand in hand along the water edge their reflections shimmering in the rippling lake Nearby children laughed and played their joyful voices carrying on the wind It was a perfect evening a moment of pure serenity in a busy world As the stars began to appear the night whispered promises of dreams and possibilities embracing the beauty of the present',
    }
]

let arr = obj[0].text.split(" ");

function Typerbox({timerange,timeEnd}){
    let [currCharIndex,setCurrCharIndex] = useState(-1);
    let [currChar,setCurrChar] = useState("");
    let [type,setType] = useState("");
    let [currectword,setCurrectWord] = useState(0)
    let [Incurrectword,setIncurrectWord] = useState(0)
    let [currIndex,setCurrwordIndex] = useState(0);
    let [words,setWords] = useState(arr);
    
    function handleType(e){
        // handleWords(e.target.value)
        setType(e.target.value);
    }
  
    function handleKeydown({keyCode,key}){
        if(keyCode === 32){
            checkMathch();
            setCurrwordIndex(currIndex+1)
            setCurrCharIndex(-1);
        }
        else if(keyCode === 8){
            setCurrCharIndex(currCharIndex - 1);
            if(currIndex !== 0 && currCharIndex < -1){
                setCurrwordIndex(currIndex - 1);
            }
            setCurrChar("");
        }
        else{
            setCurrCharIndex(currCharIndex + 1);
            setCurrChar(key)
        }
    }
    function checkMathch(){
        let wordTocompare = words[currIndex];
        console.log(wordTocompare,type.trim())
        let typeWord = type.split(" ");
        let currentWord = typeWord[typeWord.length-1];

        let matchCheck = wordTocompare === currentWord.trim();
        if(matchCheck){
            setCurrectWord(currectword + 1);
        }
        else{
            setIncurrectWord(Incurrectword + 1)
        }
       
        console.log(matchCheck)
    }

    function getBackground(wordidx,charidx,char){
        if(wordidx === currIndex && charidx === currCharIndex && currChar ){
            if(currChar === char){
                return "success"
            }
            else{
                return "not-success"
            }
        }
    }

    return (
        <div className="type-box">
            <input className="input-field" type="text" onKeyDown={handleKeydown} value={type} onChange={handleType} >
            </input>
            <br></br>
            <p className="para-graph">{
                arr.map((word,i) =>{
                   return(
                    <span key={i}>
                    <span >{
                        
                        word.toLowerCase().split("").map((letter,idx) =>{
                            return (
                                
                                (<span className={getBackground(i,idx,letter)} key={idx}>{letter}</span>)
                            )
                            
                        })
                        
                    
                    }
                    </span>
                    <span> </span>
                    </span>
                    
                   )
                })
            }
            </p>
              <br></br>
            <div className="result-div">
                <br></br>
                <p className="word-per-min">WPM: {Math.round(currectword/5) /(timerange/60)}</p>
                <br></br>
                <p className="accuracy">Accuracy: {Math.round(currectword/(currectword+Incurrectword)) * 100}%</p>
                
            </div>
            
            
            
            
        </div>
    )
}

export default Typerbox;