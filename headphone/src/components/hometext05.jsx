export default function Hometext05({ value }) {
  const style5bu = {
    display: "flex",
    width: "fit-content",
    padding: "10px 16px",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "10px",
    flexShrink: 0,
    borderRadius: "400px",
    background: "rgba(113, 113, 113, 0.5)",
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
    <div style={style5bu}>
      <div style={style5butxt}>{value}</div>
    </div>
  );
}
