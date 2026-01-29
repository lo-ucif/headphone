export default function Homebut01({ value }) {
  const buttonStyle = {
    display: "flex",
    width: "130px",
    padding: "16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    gridRow: "1 / span 1",
    gridColumn: "1 / span 1",
    justifySelf: "center",
    borderRadius: "400px",
    background: "#F6F6F6",
  };
  const textstyle = {
    color: "#000000",
    textAlign: "center",
    fontFamily: "Itim",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  return (
    <div style={buttonStyle}>
      <div style={textstyle}>{value}</div>
    </div>
  );
}
