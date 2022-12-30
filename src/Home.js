import React, { useState } from 'react'
import ShowImage from './ShowImage'

function Home(props) {

  const [inputVal, setInputVal] = useState("")

  const onChangeHandler = (event) => {
    setInputVal(event.target.value);
  }

  return (
    <>
    <h1>This is <span style={{color:"blueviolet"}}>{props.name}</span> Page</h1>  
    <div className='HomeSec'>
    <input type="text" placeholder='Search Images' value={inputVal} onChange={onChangeHandler}/>    
    </div>

    {inputVal === "" ? <div className='imgDiv'><p>Search <span style={{color:"orange"}}> Images....</span></p></div> :<ShowImage name={inputVal}/>}
    </>
  )
}

export default Home
