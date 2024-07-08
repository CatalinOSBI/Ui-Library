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
  enableGlow?: boolean | undefined;
  enableGlowPrimColor?: Color | undefined;
  enableGlowSecColor?: Color | undefined;
}

const OSBIfrostedBorder: React.FC<OSBIfrostedBorderProps> = ({
  children,
  enableGlow = true,
  enableGlowPrimColor,
  enableGlowSecColor,
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
    const x = e.pageX - rect.left;
    const y = e.pageY - rect.top;
    setButtonDynamicOpacity(1);
    setMousePosition({ posX: x, posY: y });
  };

  const dynamicStyle = {
    left: `${mousePosition.posX - 50}px`,
    top: `${mousePosition.posY - 27.5}px`,
    opacity: enableGlow ? buttonDynamicOpacity : 0,
    background: `radial-gradient(ellipse at center, ${enableGlowPrimColor} 0%, ${enableGlowSecColor} 100%)`,
  };

  return (
    <div className="OSBIcontainer">
      <div
        onMouseMove={handleGetMouseMove}
        onMouseLeave={() => setButtonDynamicOpacity(0)}
        className="OSBIfrostedBorder"
      >
        {children}{" "}
        {/* this is where the children of this FC (functional component go) */}
      </div>
      <div style={dynamicStyle} className="OSBIglow"></div>
    </div>
  );
};

export default OSBIfrostedBorder;
