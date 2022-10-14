import React from "react";
import "./Meter.css";

function Meter(props) {
  const bar = props.progress;
  const bg = props.color;
  return (
    <div className="skills" style={{ background: bg, width: bar }}></div>
  );
}

export default Meter;
