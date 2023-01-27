import React from "react";

export default function Card(props) {
  const { title, category, price, img, desc } = props.item;
  return (
    <div className="item-con">
      <div className="image-con">
        <img src={img} alt="food" className="food-image" />
      </div>
      <div className="item-detail">
        <div className="item-head">
          <h3>{title}</h3>
          <span className="price">{`$${price}`}</span>
        </div>
        <hr></hr>
        <p className="item-info">{desc}</p>
      </div>
    </div>
  );
}
