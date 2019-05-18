import React from "react";
import { ButtonDefaultStyle } from "./ButtonsStyle";
function ButtoDefault(props) {
  console.log(props);
  return <ButtonDefaultStyle {...props}>{props.name}</ButtonDefaultStyle>;
}

export default ButtoDefault;
