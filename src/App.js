import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { getByTitle } from '@testing-library/react';

function App(props) {

  console.log(props,"weblaaa");
  const [value, getValue] = useState(0);


  const handlePlusClick = () => {

    getValue(value + 1);

  }
  const handleMinusClick = () => {
    if (value > 0) {

      getValue(value - 1);

    }
  }


  return (
    <div className="chinna">
      <h1 className="web">{props.title}</h1>
      <button onClick={handlePlusClick}>Increment(+)</button>
      <p className="ram">{value}</p>
      <button onClick={handleMinusClick}>Decrement(-)</button>
      
    </div>
  );
}

export default App;
