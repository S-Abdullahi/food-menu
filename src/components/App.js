import React, { useState } from "react";
import Nav from "./Nav";
import Card from "./Card";
import Menu from "../data";

const dataCategory = new Set(Menu.map((item) => item.category));
const catergories = ["All", ...dataCategory];
export default function App() {
  const [category, setCategory] = useState(Menu);

  function selectCategory(cat) {
    if (cat === "All") {
      setCategory(Menu);
    } else {
      const newArray = Menu.filter((item) => item.category === cat);
      setCategory(newArray);
    }
  }

  const navCat = catergories.map((item) => {
    return <Nav key={item} item={item} selectCategory={selectCategory} />;
  });

  const foodItem = category.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <>
      <h1>Our Menu</h1>
      <div className="cat-con">{navCat}</div>

      <div className="menu-con">{foodItem}</div>
    </>
  );
}
