import React from "react";
import OSBIfrostedBorder from "../OSBIfrostedBorder";
import "./OSBIicon.css";

interface OSBIicon {
  size?: React.CSSProperties["width"];
  glow?: boolean;
  glowPrimColor?: React.CSSProperties["color"];
  glowSecColor?: React.CSSProperties["color"];
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
    <OSBIfrostedBorder
      glow={glow}
      glowPrimColor={glowPrimColor}
      glowSecColor={glowSecColor}
    >
      <div className="OSBIicon" style={dynammicStyle}>
        <img src={iconSrc} alt="Icon" width={iconSize} />
      </div>
    </OSBIfrostedBorder>
  );
};

export default OSBIicon;
