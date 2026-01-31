import Familtbut01 from "./familtbut01";
export default function Familyelement({ img, text01, text02, more }) {
  const stylecadre = {
    width: "360px",
    height: "392px",
    borderRadius: "30px",
    background: "#FFF",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    gap: "2px",
    alignItems: "center",
  };
  const styleimg = {
    width: "260px",
    height: "260px",
  };
  const styletxt01 = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Itim",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
  const twobut = {
    display: "inline-flex",
    height: "62px",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  };
  return (
    <div style={stylecadre}>
      <img style={styleimg} src={img} />
      <div style={styletxt01}>{text01}</div>
      <div style={styletxt01}>{text02}</div>
      <div style={twobut}>
        <Familtbut01 color={"#B7B7B7"} value={"add to store"} />
        <Familtbut01 color={"#484646"} value={"more info"} onClicked={more} />
      </div>
    </div>
  );
}
