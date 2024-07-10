import React from "react";
import OSBIfrostedBorder from "../OSBIfrostedBorder";
import "./OSBIicon.css";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX;

interface OSBIicon {
  size?: React.CSSProperties["width"];
  glow?: boolean;
  glowPrimColor?: Color;
  glowSecColor?: Color;
  primColor?: string;
  secColor?: string;
  iconSize?: React.CSSProperties["width"];
  iconSrc?: string;
}

const OSBIicon: React.FC<OSBIicon> = ({
  size = "32px",
  glow = true,
  primColor = "rgb(24 38 45)",
  secColor = "rgb(35 56 66)",
  glowPrimColor = "rgb(0, 255, 255)",
  glowSecColor = "rgb(0, 140, 255)",
  iconSize = 32,
  iconSrc,
}) => {
  const dynammicStyle = {
    width: size,
    height: size,
    background: `linear-gradient(to right, ${primColor} 0%, ${secColor} 100%)`,
  };

  return (
    <div className="OSBIicon">
      <OSBIfrostedBorder
        glow={glow}
        glowPrimColor={glowPrimColor}
        glowSecColor={glowSecColor}
      >
        <div className="OSBIiconContent" style={dynammicStyle}>
          <img src={iconSrc} alt="Icon" width={iconSize} />
        </div>
      </OSBIfrostedBorder>
    </div>
  );
};

export default OSBIicon;
