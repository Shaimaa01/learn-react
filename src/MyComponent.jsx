// React Hook = Spcial function that allows functional components
//              to use React  features without writing class components (React v16.8)
//              (useState , useEffect , useContext , userReducer , userCallback , and more.....)

// useState() = A React hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the virtual DOM.
//              [name,setName]

// updater function = A function passed as an argument to setState() usually
//                    ex. setYear (arrow funtion)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater function

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    modle: "Mustang",
  });

  const updateName = () => {
    setName("shaimaa 😎");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChanage(event) {
    setPayment(event.target.value);
  }

  function handleSippingChange(event) {
    setShipping(event.target.value);
  }

  // Car
  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleModleChange(event) {
    setCar((c) => ({ ...c, modle: event.target.value }));
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <input type="text" value={name} onChange={handleNameChange} />

      <p>Age:{age}</p>
      <button onClick={incrementAge}>IncrementAge</button>
      <input type="number" value={age} onChange={handleAgeChange} />

      <p>Is employed:{isEmployed ? "Yes" : "NO"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Staus</button>
      <input type="text" />

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter Delivery Instructions"
      ></textarea>
      <p>Comment:{comment}</p>

      <select value={payment} onChange={handlePaymentChanage}>
        <option value="">Select an option</option>
        <option value="visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment:{payment}</p>

      <label>
        <input
          type="radio"
          value="Pick UP"
          checked={shipping === "Pick UP"}
          onChange={handleSippingChange}
        />
        Pick Up
      </label>

      <br />

      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleSippingChange}
        />
        Delivery
      </label>
      <p>Shipping:{shipping}</p>

      <div>
        <p>
          YOur favorite car is: {car.year} {car.make} {car.modle}
        </p>
        <input type="number" value={car.year} onChange={handleYearChange} />
        <br />
        <input type="text" value={car.make} onChange={handleMakeChange} />
        <br />
        <input type="text" value={car.modle} onChange={handleModleChange} />
        <br />
      </div>
    </div>
  );
}

export default MyComponent;
