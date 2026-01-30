import { useState } from "react";

export default function Colorselect() {
  const listcolor = {
    display: "flex",
    width: "317px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };

  const itemcolor = {
    display: "flex",
    width: "28px",
    height: "28px",
    justifyContent: "center",
    borderRadius: "50%",
    alignItems: "center",
    aspectRatio: "1 / 1",
    cursor: "pointer",
  };

  const colors = [
    "#876C8B",
    "#86B2BD",
    "#224692",
    "#76563F",
    "#FFFFFF",
    "#B6B6B6",
    "#5C5C5C",
    "#000000",
  ];

  const [coloractive, setcoloractive] = useState("#224692");

  const changecolor = (color) => {
    setcoloractive(color);
  };

  return (
    <div style={listcolor}>
      {colors.map((color, index) => (
        <div
          key={index}
          onClick={() => changecolor(color)}
          style={{
            ...itemcolor,
            backgroundColor: color,
            border:
              coloractive === color
                ? "3px solid black"
                : "3px solid transparent",
          }}
        />
      ))}
    </div>
  );
}
