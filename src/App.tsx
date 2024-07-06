// import React from "react";
import OSBIbutton from "./Components/OSBIbutton";
import "./App.css";

function App() {

  const handleClick = () => { 
    alert("Click")
   }

  return (
    <main>
      <OSBIbutton onClick={handleClick}/>
    </main>
  );
}

export default App;
