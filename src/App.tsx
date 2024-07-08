import React from "react";
import OSBIbutton from "./Components/OSBIbutton";
import OSBIcard from "./Components/OSBIcard";
import OSBIicon from "./Components/OSBIicon";

import "./App.css";

// TODO: Loading spinner, loading component for images, icons

function App() {
  const handleClick = () => {
    return 1;
  };
  return (
    <main>
      <div style={{ display: "flex", gap: "2rem" }}>
        <OSBIbutton
          onClick={handleClick}
          buttonName="Button 1"
          glowPrimColor="#fcba03"
          glowSecColor="#1cfc03"
        />
        <OSBIbutton onClick={handleClick} buttonName="Button 2" />
        <OSBIbutton onClick={handleClick} buttonName="Button 3" glow={false} />
      </div>

      <div style={{ display: "flex", gap: "2rem" }}>
        <OSBIcard
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="400px"
          flexDirection="column"
          gap="4rem"
          primColor="#000000"
          secColor="#202020"
        >
          <h1>Card</h1>

          <OSBIcard
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="350px"
            height="200px"
            gap="4rem"
            glow={false}
            primColor="rgb(26, 26, 26)"
            secColor="rgb(30, 30, 30)"
          >
            <h2>Card Within Card</h2>

            <OSBIbutton onClick={handleClick} buttonName="Accept" primColor="rgb(8, 8, 8)" secColor="rgba(22, 22, 22, 0.75)" />
          </OSBIcard>

          <OSBIcard
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="350px"
            height="200px"
            gap="4rem"
            glowPrimColor="#fcba03"
            glowSecColor="#1cfc03"
          >
            <h2>Card Within Card</h2>

            <OSBIbutton onClick={handleClick} buttonName="Accept" />
          </OSBIcard>
        </OSBIcard>
      </div>

    <div style={{display:'flex', gap:'2rem'}}>
      <OSBIicon/>
    </div>

    </main>
  );
}

export default App;
