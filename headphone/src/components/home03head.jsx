import Hometext05 from "./hometext05";
export default function Home03head({ img, text01, prix }) {
  const style01 = {
    width: "244px",
    height: "264px",
    borderRadius: "30px",
    background: "#FFF",
    display: "flex",
    gap: "6px",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  };
  const style02 = {
    width: "181px",
    height: "181px",
    aspectRatio: "1 / 1",
  };
  const style03 = {
    color: "#000",
    textAlign: "center",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
  return (
    <div style={style01}>
      <img style={style02} src={img} />
      <div style={style03}>{text01}</div>
      <Hometext05 value={prix} />
    </div>
  );
}
