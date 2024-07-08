import React from "react";
import OSBIfrostedBorder from "../OSBIfrostedBorder";
import "./OSBIicon.css";

const OSBIicon = () => {
  return (
    <div className="OSBIcontainer" style={{overflow:'hidden'}}>
      <OSBIfrostedBorder>
        <div className="OSBIicon">
          <p style={{ color: "white" }}>T</p>
          <OSBIfrostedBorder>
            <div className="OSBIcontainer"
              style={{ width: "50px", height: "50px", backgroundColor: "grey" , overflow: "hidden"}}
            >
              s
            </div>
          </OSBIfrostedBorder>
        </div>
      </OSBIfrostedBorder>
    </div>
  );
};

export default OSBIicon;
