import React, { useState } from "react";

export const App = () => {
  const [rangeValue, setRangeValue] = useState(0)
  
  const reset = (e) => {
    e.preventDefault()
    setRangeValue(0)//reset state to 0 in App
    //how can I get the initial Position in Range component back to 0?
  }

  return (
    <div className="App">
      <p>The range value is: {rangeValue}</p>
      <Range setRangeValue = {setRangeValue}/>
      <p><a href="/#" onClick={reset}>reset</a></p>
    </div>
  )
}

const Range = ({setRangeValue: setRangeValue}) =>
{
  const handleChange = (event) => {
    setRangeValue(event.target.value)
  }
  return (
    <input 
      type="range"
      min="0"
      max="10"
      step="1"
      defaultValue={0}
      onChange={(event) => {handleChange(event)}} />
  )
}

export default App;