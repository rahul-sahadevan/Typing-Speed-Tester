import React, { useState, useEffect } from "react";
import { generate } from "random-words";

let wordCount = [10, 50, 80, 100];



function Typerbox({ timerange,timerStart }) {
  console.log(timerange)
  console.log(timerStart)
  let [wordsArray, setWordArray] = useState(() => {
    return generate(50);
  });
  let [currCharIndex, setCurrCharIndex] = useState(-1);
  let [currChar, setCurrChar] = useState("");
  let [type, setType] = useState("");
  let [currectword, setCurrectWord] = useState(0);
  let [Incurrectword, setIncurrectWord] = useState(0);
  let [currIndex, setCurrwordIndex] = useState(0);
  let [words, setWords] = useState(wordsArray);
  let [timeEnd, setTimeEnd] = useState(false);
  let [wpm,setWpm] = useState(0);
  let [accu,setAccuracy] = useState(0);

  // Timer logic using useEffect
  useEffect(() => {
      let timer = timerange;
      console.log(timer)
    const interval = setInterval(() => {
    
      if(timerStart && timer > 0){
        console.log(timeEnd,30)
        timer -= 1;
      }
      else {
        clearInterval(interval);
        setTimeEnd(true);
        console.log(timeEnd,36)

        // Calculate the number of words and accuracy here
        const wordsTyped = type.split(" ").filter((word) => word.trim() !== "");
        const totalWords = wordsArray.length;
        const correctWords = wordsTyped.filter((word, i) => word === wordsArray[i]);
        const incorrectWords = wordsTyped.filter((word, i) => word !== wordsArray[i]);

        const wordCount = wordsTyped.length;
        console.log(currectword)
        const accuracy = ((correctWords.length / wordCount) * 100).toFixed(2);
        setWpm(wordCount)
        setAccuracy(accuracy)

        console.log("Time's up!");
        console.log(`Total Words: ${wordCount}`);
        console.log(`Accuracy: ${accuracy}%`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timerStart,timerange, type, wordsArray]);

  function handleType(e) {
    setType(e.target.value);
  }

  function handleKeydown({ keyCode, key }) {
    if (keyCode === 32) {
      checkMathch();
      setCurrwordIndex(currIndex + 1);
      setCurrCharIndex(-1);
    } else if (keyCode === 8) {
      setCurrCharIndex(currCharIndex - 1);
      if (currIndex !== 0 && currCharIndex < -1) {
        setCurrwordIndex(currIndex - 1);
      }
      setCurrChar("");
    } else {
      setCurrCharIndex(currCharIndex + 1);
      setCurrChar(key);
    }
  }

  function checkMathch() {
    let wordTocompare = words[currIndex];
    let typeWord = type.split(" ");
    let currentWord = typeWord[typeWord.length - 1];

    let matchCheck = wordTocompare === currentWord.trim();
    if (matchCheck) {
      setCurrectWord(currectword + 1);
    } else {
      setIncurrectWord(Incurrectword + 1);
    }
  }

  function getBackground(wordidx, charidx, char) {
    if (wordidx === currIndex && charidx === currCharIndex && currChar) {
      if (currChar === char) {
        return "success";
      } else {
        return "not-success";
      }
    }
  }

  function handleWordArray(count) {
    setWordArray(() => {
      return generate(count);
    });
  }

  function handleRandom() {
    let randomIndex = Math.floor(Math.random() * wordCount.length);
    handleWordArray(wordCount[randomIndex]);
  }
  useEffect(()=>{
    console.log(currectword)
    setWpm(Math.round(currectword / 5) / (timerange / 60))
    setAccuracy(Math.round((currectword / (currectword + Incurrectword)) * 100))
  },[timeEnd])

  return (
    <div className="type-box">
      <input
        className="input-field"
        type="text"
        onKeyDown={handleKeydown}
        value={type}
        onChange={handleType}
        // Disable input when the timer ends
      ></input>
      <br></br>
      <p className="para-graph">
        {wordsArray.map((word, i) => {
          return (
            <span key={i}>
              <span>
                {word.toLowerCase().split("").map((letter, idx) => {
                  return (
                    <span className={getBackground(i, idx, letter)} key={idx}>
                      {letter}
                    </span>
                  );
                })}
              </span>
              <span> </span>
            </span>
          );
        })}
      </p>
      <br></br>
      <div className="result-div">
        <br></br>
        {timeEnd && (
          <p className="word-per-min">
            WPM: {wpm}
          </p>
        ) }
        <br></br>
        {timeEnd && (
          <p className="accuracy">
            Accuracy:
            {accu}%
          </p>
        )}
      </div>
      <br></br>
      <button className="random-btn" onClick={handleRandom}>
        Random Paragraph
      </button>
      <div className="change-para-div">
        <button className="change-btns" onClick={() => handleWordArray(10)}>
          10 words
        </button>
        <button className="change-btns" onClick={() => handleWordArray(50)}>
          50 words
        </button>
        <button className="change-btns" onClick={() => handleWordArray(80)}>
          80 words
        </button>
        <button className="change-btns" onClick={() => handleWordArray(100)}>
          100 words
        </button>
      </div>
    </div>
  );
}

export default Typerbox;
