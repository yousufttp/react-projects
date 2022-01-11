import logo from "./logo.svg";
import "./App.css";
import Keys from "./Keys";
import { useState, useEffect} from 'react';

function App() {
  const [display, setdisplay] = useState('');
  
  const changeDisplay = (newvalue) =>{
    setdisplay( display + newvalue)
  };
  
  const clearDisplay = (content) =>{
    if(content === "AC"){
      setdisplay('')
    }
  }
  
  const calculate = () => {
    if(display){
      setdisplay(eval(display));
    }
  }
  
  return (
    <div className="App">
      <h2>Calculator</h2>
      <div className="resultsbox">
        <span style={{ color: "#ffff", paddingTop: "20px" }}>{display}</span>
      </div>
      <div className="calculator">
        <div>
          <Keys content="AC" className="dark-grey" setdisplay={clearDisplay}/>
        </div>
        <div>
          <Keys content="&" className="dark-grey" setdisplay={changeDisplay}/>
        </div>
        <div>
          <Keys content="%" className="dark-grey" setdisplay={changeDisplay}/>{" "}
        </div>
        <div>
          <Keys content="/" className="orange" setdisplay={changeDisplay}/>{" "}
        </div>
        <div>
          <Keys content="7" setdisplay={changeDisplay}/>
        </div>
        <div>
          <Keys content="8" setdisplay={changeDisplay}/>
        </div>
        <div>
          <Keys content="9" setdisplay={changeDisplay}/>
        </div>
        <div>
          <Keys content="*" className="orange" setdisplay={changeDisplay}/>
        </div>

        <div>
          <Keys content="4" setdisplay={changeDisplay}/>
        </div>
        <div>
          <Keys content="5" setdisplay={changeDisplay}/>
        </div>
        <div>
          <Keys content="6" setdisplay={changeDisplay}/>
        </div>
        <div>
          <Keys content="-" className="orange" setdisplay={changeDisplay}/>
        </div>

        <div>
          <Keys content="1" setdisplay={changeDisplay}/>
        </div>
        <div>
          <Keys content="2" setdisplay={changeDisplay}/>
        </div>
        <div>
          <Keys content="3" setdisplay={changeDisplay}/>
        </div>
        <div>
          <Keys content="+" className="orange" setdisplay={changeDisplay}/>
        </div>

        <div style={{ gridColumn: "1 / 3" }}>
          <Keys content="0" setdisplay={changeDisplay}/>
        </div>
        <div>
          <Keys content="." setdisplay={changeDisplay}/>
        </div>
        <div>
          <Keys content="=" className="orange" setdisplay={calculate} />
        </div>
      </div>
    </div>
  );
}

export default App;
