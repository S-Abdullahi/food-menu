import React from "react";

export default function Nav(props) {
  return <button onClick={() => props.selectCategory(props.item)}>{props.item}</button>;
}
