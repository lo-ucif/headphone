import Hometext05 from "./hometext05";
export default function Text3line() {
  const styletxt3 = {
    display: "inline-flex",
    padding: "0 13px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const styletxt3h1 = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Itim",
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
  const styletxt3p = {
    color: "#000",
    textAlign: "center",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "26px",
    letterSpacing: "0.2px",
  };
  return (
    <div style={styletxt3}>
      <Hometext05 value={"choose"} />
      <div style={styletxt3h1}>Why choose our headphones</div>
      <div style={styletxt3p}>+ 3 Import special to choose</div>
    </div>
  );
}
