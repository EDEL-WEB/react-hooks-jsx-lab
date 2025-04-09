import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // Updated JSX to include the required elements
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;