import React from "react";

const CounterControl = (props) => {
  return (
    <span>
      <button onClick={props.clicked}>{props.label}</button>
    </span>
  );
};

export default CounterControl;
