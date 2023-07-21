import { useState } from 'react';

function App() {

  const [minVal,setMinVal] = useState(1);
  const [maxVal,setMaxVal] = useState(99);
  const [randomNum,setRandomNum] = useState(Math.floor(Math.random()*(maxVal-minVal+1)+minVal));
  
  const handlePick = () =>{
    setRandomNum(Math.floor(Math.random()*(maxVal-minVal+1)+minVal));
  }

    return (
        <>
        <p>Random Number: {randomNum}</p>
        <input type="number" value={minVal} onChange={e => setMinVal(+e.target.value)}/>
        <input type="number" value={maxVal} onChange={e => setMaxVal(+e.target.value)}/>
        <button onClick={handlePick}>Generate</button>
        </>
    )
  }
  
export default App;
