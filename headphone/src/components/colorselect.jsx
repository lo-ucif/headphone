import "../style/home04.css";

export default function Colorselect({ setActiveColor, activeColor }) {
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

  const changecolorfunction = (color) => {
    setActiveColor(color);
  };

  return (
    <div className="listcolor">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`itemcolor ${activeColor === color ? "active" : ""}`}
          style={{ backgroundColor: color }}
          onClick={(e) => {
            e.stopPropagation();
            changecolorfunction(color);
          }}
        />
      ))}
    </div>
  );
}
