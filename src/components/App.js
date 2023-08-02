
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  let [ipval,setIpval]=useState(null);
  console.log(ipval)
  return (
    <div>
        {/* Do not remove the main div */}
        <form>
          <label htmlFor="ip">Enter your name:</label>
          <input type="text" onChange={(event)=>{setIpval(event.target.value)}} id="ip"/>
        </form>
        {ipval && <p>Hello {ipval}!</p> }
    </div>
  )
}

export default App
