import { useState } from "react";
import OSBIfrostedBorder from "../OSBIfrostedBorder";
import "./OSBIbutton.css";

interface OSBIbuttonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonName: string;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  borderRadius?: React.CSSProperties["borderRadius"];
  glow?: boolean;
  primColor?: React.CSSProperties["color"];
  secColor?: React.CSSProperties["color"];
  glowPrimColor?: React.CSSProperties["color"];
  glowSecColor?: React.CSSProperties["color"];
  borderColor?: React.CSSProperties["color"];
  border?: boolean;
}

const OSBIbutton: React.FC<OSBIbuttonProps> = ({
  onClick,
  buttonName,
  width,
  height,
  borderRadius,
  glow = true,
  primColor = "rgb(24 38 45)",
  secColor = "rgb(35 56 66)",
  glowPrimColor = "rgb(0, 255, 255)",
  glowSecColor = "rgb(0, 140, 255)",
  border = false,
  borderColor = "grey",
}) => {
  return (
    <OSBIfrostedBorder
      glow={glow}
      glowPrimColor={glowPrimColor}
      glowSecColor={glowSecColor}
    >
      <button
        onClick={onClick}
        className="OSBIbutton"
        style={{
          width: width,
          height: height,
          borderRadius: borderRadius,
          background: border
            ? `transparent`
            : `linear-gradient(to right, ${primColor} 0%, ${secColor} 100%)`,
          border: border ? `2px solid ${borderColor}` : "none",
        }}
      >
        {buttonName}
      </button>
    </OSBIfrostedBorder>
  );
};
export default OSBIbutton;
