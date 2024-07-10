import React from "react";
import "./OSBIloader.css";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX;

interface OSBIloaderProps {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  primColor?: Color;
  secColor?: Color;
}

const OSBIloader: React.FC<OSBIloaderProps> = ({
  width,
  height,
  primColor = 'rgb(0, 90, 173)',
  secColor = 'rgb(0,140,255)',
}) => {
  const dynamicStyle = {
    width: width,
    height: height,
    "--loader-color": `linear-gradient(to right, ${primColor} 0%, ${secColor} 100%)`,
  };

  return <div className="OSBIloader" style={dynamicStyle}></div>;
};

export default OSBIloader;
