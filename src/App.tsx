import React from "react";
import OSBIbutton from "./Components/OSBIbutton";
import OSBIcard from "./Components/OSBIcard";
import OSBIicon from "./Components/OSBIicon";
import OSBIloader from "./Components/OSBIloader";
import OSBIfrostedBorder from "./Components/OSBIfrostedBorder";
import github from "/github.svg";
import "./App.css";

function App() {
  const handleClick = () => {
    return 1;
  };

  return (
    <main>
      Buttons
      <div style={{ display: "flex", gap: "2rem" }}>
        <OSBIbutton
          onClick={handleClick}
          buttonName="Button 1"
          glowPrimColor="#fcba03"
          glowSecColor="#1cfc03"
        />
        <OSBIbutton onClick={handleClick} buttonName="Button 2" />
        <OSBIbutton
          onClick={handleClick}
          buttonName="Button 3"
          glow={false}
          border={true}
          borderColor="asd"
        />
      </div>
      Cards
      <div style={{ display: "flex", gap: "2rem" }}>
        <OSBIcard display="flex" justifyContent="center">
          <h1>Card</h1>
        </OSBIcard>

        <OSBIcard
          display="flex"
          justifyContent="center"
          alignItems="center"
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

            <OSBIbutton
              onClick={handleClick}
              buttonName="Accept"
              primColor="rgb(8, 8, 8)"
              secColor="rgba(22, 22, 22, 0.75)"
            />
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
      Icons
      <div style={{ display: "flex", gap: "2rem" }}>
        <OSBIicon
          iconSrc={github}
          size="32px"
          iconSize={32}
          glowPrimColor="#ffffff"
          glowSecColor="#ffffff"
        />

        <OSBIicon iconSrc={github} size="64px" iconSize={64} />

        <OSBIicon
          iconSrc={github}
          size="64px"
          iconSize={32}
          primColor="#000000"
          secColor="rgba(22, 22, 22, 0.75)"
          glowPrimColor="#ffffff"
          glowSecColor="#ffffff"
        />
      </div>
      Loaders
      <div style={{ display: "flex", gap: "2rem" }}>
        <OSBIloader />
        <OSBIloader
          width={250}
          height={5}
          primColor="#fcba03"
          secColor="#fc8803"
        />
        <OSBIloader width={300} height={1} />
      </div>
      Frosted Border
      <div style={{ display: "flex", gap: "2rem" }}>
        <OSBIfrostedBorder glowPrimColor="red" glowSecColor="violet">
          <div
            style={{ width: "100px", height: "100px", backgroundColor: "grey" }}
          >
            1
          </div>
        </OSBIfrostedBorder>

        <OSBIfrostedBorder>
          <div
            style={{
              width: "150px",
              height: "100px",
              backgroundColor: "black",
            }}
          >
            2
          </div>
        </OSBIfrostedBorder>

        <OSBIfrostedBorder glowPrimColor="green" glowSecColor="yellow">
          <div
            style={{
              width: "100px",
              height: "200px",
              backgroundColor: "brown",
            }}
          >
            3
          </div>
        </OSBIfrostedBorder>
      </div>
      Skeleteon Component
      <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
        <img
          src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          width={700}
        />

        <img
          src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          width={700}
        />
      </div>
    </main>
  );
}

export default App;
