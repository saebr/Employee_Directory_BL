import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero text-center">
      <h1>Employee Directory</h1>
      <h2 className="mt-5">Use the search box to narrow your results by first name, or click 
      age to filter by age.
      </h2>
    </div>
  );
}

export default Hero;
