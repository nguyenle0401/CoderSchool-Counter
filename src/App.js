import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Box from "./components/Box";

function App() {
  let dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const increment = (e) => {
    dispatch({ type: "INCREMENT", payload: { colorText: e.target.value } });
  };
  const decrement = (e) => {
    dispatch({ type: "DECREMENT", payload: { colorText: e.target.value } });
  };
  const setCount = () => {
    dispatch({ type: "RESET" });
  };
  const changeColor = (e) => {
    dispatch({ type: "COLOR", payload: e.target.value });
  };

  const changeNumBox = (e) => {
    if( e.target.value < 0){
      alert("Please enter a number greater than 0")
    }
    dispatch({ type: "CHANGE_NUM_BOX", payload: e.target.value });
  };

   const renderBoxes = () => {
    let boxArray = [];
    for (let i = 0; i < count; i++) {
      boxArray.push(<Box number={i} />);
    }
    return boxArray;
  };

  return (
    <div className="App">
      <h1 className = "style-counter">Counter</h1>
      <h2>{count}</h2>
      <input
        className = "mr-2"
        placeholder="number of box"
        type="number"
        min = "0"
        onChange={(e) => changeNumBox(e)}
      />
      <input
        placeholder="type color"
        type="text"
        onChange={(e) => changeColor(e)}
      />
      <Button variant = "success" className= "ml-1 mr-1" onClick={(e) => increment(e)}> Increment </Button>
      <Button variant = "success" className= "mr-1" onClick={(e) => decrement(e)}> Decrement </Button>
      <Button variant = "danger" className= "mr-1" onClick={() => setCount(0)}> Reset </Button>
      {renderBoxes()}
    </div>
  );
}

export default App;
