import React, { useState, useEffect } from "react";
import svgRaw from "./svg.js";
import svgRaw2 from "./singleSvg.js";

interface HoveredElement {
  name: string;
  x: number;
  y: number;
}

const InteractiveSVG: React.FC = () => {
  const [hoveredElement, setHoveredElement] = useState<HoveredElement | null>(
    null
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLElement;
    const name = element.getAttribute("id");
    setHoveredElement({ name, x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  return (
    <div className="">
     {/* <div
        className="svg-container"
        dangerouslySetInnerHTML={{ __html: svgRaw }}
      />  */}

      <div
        className="svg-container"
        dangerouslySetInnerHTML={{ __html: svgRaw2 }}
        onMouseOver={handleMouseEnter}
        onMouseOut={handleMouseLeave}
      />
      {hoveredElement?.name && (
        <div
          style={{
            position: "absolute",
            left: hoveredElement.x + 15,
            top: hoveredElement.y + 10,
            pointerEvents: "none",
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          {hoveredElement.name.split("-").join(" ")}
        </div>
      )}

      {hoveredElement && (
        <style>
          {`
            #${hoveredElement.name} {
              fill: yellow;
            }
          `}
        </style>
      )}
    </div>
  );
};

export default InteractiveSVG;
