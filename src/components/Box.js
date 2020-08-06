import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";

export default function Box({number}) {
  const color = useSelector((state) => state.color);
  const colorText = useSelector((state) => state.colorText);
  const boxColors = useSelector(state => state.boxColors[number]);
  let dispatch = useDispatch();

  return (
    <div>
      <div className="this-box box">
        <div
          className="this-box1 mt-4"
          style={{ backgroundColor:  boxColors ? boxColors  : color, color: colorText }}
        >
          <h6>
          <input
            type = "text"
            onChange={e =>
              dispatch({
                type: "CHANGECOLORBTN",
                payload: { color: e.target.value, id: number }
              })
            }
          ></input>
            <strong>TEXT BOX</strong>
          </h6>
        </div>
      </div>
    </div>
  );
}
