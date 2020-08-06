import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

export default function InputBox() {
    const boxColors = useSelector(state => state.boxColors);
    return (
        <div>
        <h1>
        <input type = "text">{boxColors}</input>
        </h1>
        </div>
    )
}

