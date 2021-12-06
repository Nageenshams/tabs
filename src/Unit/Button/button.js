import React from "react";
//import items from "../../Components/Array";
import "./Button.css";
const Button = ({ filterArray, menuList }) => {
  return (
    <>
      <div className="btn-container">
        {menuList.map((curElem) => {
          return (
            <button className="job-btn" onClick={() => filterArray(curElem)}>
              {curElem}
            </button>
          );
        })}
      </div>
    </>
  );
};
export default Button;
