export default function Home2text({ value, logo }) {
  const style2text = {
    display: "grid",
    width: "388px",
    height: "81px",
    rowGap: "8px",
    columnGap: "8px",
    flexShrink: 0,
    gridTemplateRows: "repeat(3, fit-content(100%))",
    gridTemplateColumns: "repeat(1, fit-content(100%))",
  };
  const home2pretxt = {
    gridRow: "2 / span 1",
    gridColumn: "1 / span 1",
    color: "#000",
    fontFamily: "Itim",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "26px",
    letterSpacing: "0.2px",
  };
  const stylelogo = {
    width: "39px",
    height: "39px",
    alignSelf: "start",
    aspectRatio: "1 / 1",
    gridRow: "1 / span 1",
    gridColumn: "1 / span 1",
    justifySelf: "start",
  };

  return (
    <div style={style2text}>
      <div style={stylelogo}>{logo}</div>
      <div style={home2pretxt}>{value}</div>
    </div>
  );
}
