import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";

export default function Box() {
  const color = useSelector((state) => state.color);
  const colorText = useSelector((state) => state.colorText);

  let dispatch = useDispatch();
  const changeColorBtn = (e, i) => {
    dispatch({
      type: "CHANGECOLORBTN",
      payload: { color: e.target.value, index: i },
    });
  };

  return (
    <div>
      <div className="this-box box">
        <div
          className="this-box1 mt-4"
          style={{ backgroundColor: color, color: colorText }}
        >
          <h6>
            <input
              onChange={(e, i) => changeColorBtn(e, i)}
              type="text"
            ></input>
            <strong>TEXT BOX</strong>
          </h6>
        </div>
      </div>
    </div>
  );
}
