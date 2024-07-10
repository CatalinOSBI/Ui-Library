import { useState } from "react";
import "./OSBIfrostedBorder.css";

interface MousePositionInterface {
  posX: number;
  posY: number;
}

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX;

interface OSBIfrostedBorderProps {
  children: React.ReactNode;
  glow?: boolean | undefined;
  glowPrimColor?: Color | undefined;
  glowSecColor?: Color | undefined;
}

const OSBIfrostedBorder: React.FC<OSBIfrostedBorderProps> = ({
  children,
  glow = true,
  glowPrimColor,
  glowSecColor,
}) => {
  const [mousePosition, setMousePosition] = useState<MousePositionInterface>({
    posX: 0,
    posY: 0,
  });
  const [buttonDynamicOpacity, setButtonDynamicOpacity] = useState<number>(0);

  const handleGetMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setButtonDynamicOpacity(1);
    setMousePosition({ posX: x, posY: y });
  };

  const dynamicStyle = {
    left: `${mousePosition.posX - 50}px`,
    top: `${mousePosition.posY - 27.5}px`,
    opacity: glow ? buttonDynamicOpacity : 0,
    background: `radial-gradient(ellipse at center, ${glowPrimColor} 0%, ${glowSecColor} 100%)`,
  };

  return (
    <div className="OSBIcontainer">
      <div
        onMouseMove={handleGetMouseMove}
        onMouseLeave={() => setButtonDynamicOpacity(0)}
        className="OSBIfrostedBorder"
      >
        {children}
        {/* this is where the children of this FC (functional component go) */}
      </div>
      <div style={dynamicStyle} className="OSBIglow"></div>
    </div>
  );
};

export default OSBIfrostedBorder;
