import React from "react";

const Button = ({
  text = "Click me",
  onClick = () => alert("No function"),
}) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
