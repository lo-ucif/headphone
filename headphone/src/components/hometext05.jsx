import { useState } from "react";

export default function Hometext05({ value }) {
  const [hover, setHover] = useState(false);

  const style5bu = {
    display: "flex",
    width: "fit-content",
    padding: "10px 12px",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "10px",
    flexShrink: 0,
    borderRadius: "400px",
    background: hover
      ? "rgba(113, 113, 113, 1)"  
      : "rgba(113, 113, 113, 0.5)",  
    cursor: "pointer",
    transition: "all 0.3s ease",   
    transform: hover ? "translateY(-3px)" : "translateY(0)", // حركة خفيفة عند hover
  };

  const style5butxt = {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Itim",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  return (
    <div
      style={style5bu}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={style5butxt}>{value}</div>
    </div>
  );
}
