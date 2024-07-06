// import React from "react";
import OSBIbutton from "./Components/OSBIbutton";
import "./App.css";

function App() {
  const handleClick = () => {
    return 1;
  };

  return (
    <main>
      <OSBIbutton onClick={handleClick} buttonName="Button 1" />
      <OSBIbutton onClick={handleClick} buttonName="Button 2" />
      <OSBIbutton onClick={handleClick} buttonName="Button 3" />
    </main>
  );
}

export default App;
