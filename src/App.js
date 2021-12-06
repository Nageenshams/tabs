import React, { useState } from "react";
import items from "./Components/Array";
import About from "./Components/About/About";
import Button from "./Unit/Button/button";

const uniqueList = [
  ...new Set(
    items.map((curElem) => {
      return curElem.company;
    })
  ),
];

const App = () => {
  const [menu, setMenu] = useState([items[0]]);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterArray = (company) => {
    const updateItems = items.filter((curElem) => {
      return curElem.company === company;
    });

    setMenu(updateItems);
  };
  return (
    <div className="section">
      <div className="title">
        <h1>Exprience</h1>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        <Button filterArray={filterArray} menuList={menuList} />
        <About menu={menu} />
      </div>
    </div>
  );
};
export default App;
