import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return <div id="home" style={{ color: "firebrick" }}>
      <h1>
        I am {name}, a Web Developer from {city}
      </h1>
      </div>

}

export default Home;
