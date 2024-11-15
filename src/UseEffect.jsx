// useEffect() = React Hook That tells React Do some code when (pick one):
//                 This component re-renders
//                  This component mounts
//                   This state of a value

// useEffect(function,[dependencies])

// 1.useEffect(() => {})            //Runs after every re-reder
// 2.useEffect(() => {} , [])       //Runs only on mount
// 3.useEffect(() => {} , [value])  //Runs on mount + when value changes

//USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 subscription (real-time updates)
// #4 fetching Data from an API
// #5 Clean Up when a component umounts

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  const[width,setwidth] = useState(window.innerWidth);
  const [height  , setheight] = useState(window.innerHeight);

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count , color]);

  function addCount() {
    setCount((c) => c + 1);
  }

  function subtractCount() {
    setCount((c) => c - 1);
  }

  function changeColor(){
    setColor(c => c ==="green" ? "red" :"green")
  }

useEffect(()=>{
  window.addEventListener("resize" , handleResize);
  console.log("Event listener added")

  return() =>{
    window.removeEventListener("resize" , handleResize);
    console.log("Event listener remove")
  }
},[])

useEffect(()=>{
  document.title = `Size: ${width} X ${height}`
}, [width , height])


  function handleResize(){
    setwidth(window.innerWidth)
    setheight(window.innerHeight)
  }

  return (
    <>
      <p style={{color:color}}>Count:{count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <br />
      <button onClick={changeColor} >Change Color</button>

      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
}

export default UseEffect;
