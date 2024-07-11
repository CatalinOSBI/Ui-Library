import React from "react";
import "./OSBIcard.css";
import OSBIfrostedBorder from "../OSBIfrostedBorder";

interface OSBIcard {
  children: React.ReactNode;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  display?: React.CSSProperties["display"];
  flexDirection?: React.CSSProperties["flexDirection"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  gap?: string;
  cardName?: string;
  glow?: boolean;
  borderRadius?: string;
  primColor?: React.CSSProperties["color"];
  secColor?: React.CSSProperties["color"];
  glowPrimColor?: React.CSSProperties["color"];
  glowSecColor?: React.CSSProperties["color"];
}

const OSBIcard: React.FC<OSBIcard> = ({
  children,
  cardName,
  width,
  height,
  display,
  justifyContent,
  alignItems,
  gap,
  flexDirection,
  glow = true,
  borderRadius,
  primColor = "rgb(0, 20, 31)",
  secColor = "rgb(24, 39, 46)",
  glowPrimColor = "rgb(0, 255, 255)",
  glowSecColor = "rgb(0, 140, 255)",
}) => {
  const dynamicCardStyle = {
    width: width,
    height: height,
    display: display,
    justifyContent: justifyContent,
    alignItems: alignItems,
    gap: gap,
    flexDirection: flexDirection,
    borderRadius: borderRadius,
    background: ` linear-gradient(to right, ${primColor} 0%, ${secColor} 100%)`,
  };

  return (
    <OSBIfrostedBorder
      glow={glow}
      glowPrimColor={glowPrimColor}
      glowSecColor={glowSecColor}
    >
      <div className="OSBIcard" style={dynamicCardStyle}>
        {cardName}
        {children}
      </div>
    </OSBIfrostedBorder>
  );
};

export default OSBIcard;
