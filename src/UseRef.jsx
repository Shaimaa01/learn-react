// UseState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//              when you want a component to "remmber" some information,
//              but you don`t want that information to tirgger new renders.

//              1. Accessing/Interaction with DOM elemnts
//              2. Handling Focus , Animations , and Transitions
//              3. Managing Timers and Intervals

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";

function UseRef() {
  //   let [number, setNumber] = useState(0);
  //   const ref = useRef(0);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("Componet Rendered");
  });

  function handleClick1() {
    // ref.current++;
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    // ref.current++;
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "red";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    // ref.current++;
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "black";
  }

  return (
    <div>
      <button onClick={handleClick1}>Click me1</button>
      <input type="text" ref={inputRef1} />

      <button onClick={handleClick2}>Click me2</button>
      <input type="text" ref={inputRef2} />

      <button onClick={handleClick3}>Click me3</button>
      <input type="text" ref={inputRef3} />
    </div>
  );
}

export default UseRef;
