
import React,{useState,useEffect} from "react";

let obj = [
    {
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa rerum impedit cum reprehenderit repudiandae saepe magnam? Commodi eveniet enim vitae consequuntur repellendus est ut, similique reiciendis. Esse explicabo hic accusantium soluta, quidem iste error dolore quasi rationeaccusamus molestiae beatae labore doloribus, iure tempora rerum et, omnis id facilisLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa rerum impedit cum reprehenderit repudiandae saepe magnam? Commodi eveniet enim vitae consequuntur repellendus est ut, similique reiciendis. Esse explicabo hic accusantium soluta, quidem iste error dolore quasi rationeaccusamus molestiae beatae labore doloribus, iure tempora rerum et, omnis id facilisLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa rerum impedit cum reprehenderit repudiandae saepe magnam? Commodi eveniet enim vitae consequuntur repellendus est ut, similique reiciendis. Esse explicabo hic accusantium soluta, quidem iste error dolore quasi rationeaccusamus molestiae beatae labore doloribus, iure tempora rerum et, omnis id facilis.'
    }
]

let arr = obj[0].text.split(" ");

function Typerbox({timerange}){
    let [type,setType] = useState("");
    let [currectword,setCurrectWord] = useState(0)
    let [Incurrectword,setIncurrectWord] = useState(0)
    let [currIndex,setCurrwordIndex] = useState(0);
    let [words,setWords] = useState(arr);
    
    function handleType(e){
        // handleWords(e.target.value)
        setType(e.target.value);
    }
    // function handleWords(word){
    //     let char = word.split("");
    //     let space = char.filter((letter) =>{
    //         return letter === " ";
    //     })

    //     setCountWord(space.length)
      
    // }
    function handleKeydown({keyCode}){
        if(keyCode === 32){
            checkMathch();
            setCurrwordIndex(currIndex+1)
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

    return (
        <div className="type-box">
            <input className="input-field" type="text" onKeyDown={handleKeydown} value={type} onChange={handleType} >
            </input>
            <br></br>
            <p>{
                arr.map((word,i) =>{
                   return(
                    <span key={i}>
                    <span >{
                        
                        word.split("").map((letter,idx) =>{
                            return (
                                
                                (<span key={idx}>{letter}</span>)
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
            
                
            <div className="result-div">
                <br></br>
                <p className="word-per-min">WPM: {Math.round(currectword/5) /(timerange/60)}</p>
                <br></br>
                <p className="accuracy">aCCURACY: {Math.round(currectword/(currectword+Incurrectword)) * 100}%</p>
                
            </div>
            
            
        </div>
    )
}

export default Typerbox;