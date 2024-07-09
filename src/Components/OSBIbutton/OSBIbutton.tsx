import { useState } from "react";
import OSBIfrostedBorder from "../OSBIfrostedBorder";
import "./OSBIbutton.css";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX;

interface OSBIbuttonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonName: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  glow?: boolean;
  primColor?: Color | undefined;
  secColor?: Color | undefined;
  glowPrimColor?: Color | undefined;
  glowSecColor?: Color | undefined;
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
}) => {
  return (
    <>
      <div className="OSBIbuttonContainer">
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
              background: `linear-gradient(to right, ${primColor} 0%, ${secColor} 100%)`,
            }}
          >
            {buttonName}
          </button>
        </OSBIfrostedBorder>
      </div>
    </>
  );
};
export default OSBIbutton;
