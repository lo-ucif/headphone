export default function Familtbut01({ color, value, onClicked }) {
  const butstyle = {
    display: "flex",
    width: "100px",
    height: "35px",
    padding: "5px 8px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "14px",
    background: color,
    color: "white",
    cursor: "pointer",
  };
  return (
    <div onClick={onClicked}>
      <div style={butstyle}>{value}</div>
    </div>
  );
}
