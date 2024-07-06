import { useState } from "react";
import "./OSBIbutton.css";

interface MousePositionInterface {
  posX: number;
  posY: number;
}

interface OSBIbuttonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonName: string;
  width?: string;
  height?: string;
}

function OSBIbutton({ onClick, buttonName, width, height }: OSBIbuttonProps) {
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
    opacity: `${buttonDynamicOpacity}`,
  };

  return (
    <>
      <div className="OSBIbuttonContainer">
        <div
          onMouseMove={handleGetMouseMove}
          onMouseLeave={() => setButtonDynamicOpacity(0)}
          className="OSBIfrostedBorder"
          style={{ width: width, height: height }}
        >
          <button
            onClick={onClick}
            onMouseDown={() => setButtonDynamicOpacity(0)}
            className="OSBIbutton"
            style={{ width: width, height: height }}
          >
            {buttonName}
          </button>
        </div>
        <div style={dynamicStyle} className="OSBIglow"></div>
      </div>

      <img
        className="imgTest"
        // src="https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-powder-smoke-colorful-background-image_2164096.jpg"
      />
    </>
  );
}
export default OSBIbutton;
