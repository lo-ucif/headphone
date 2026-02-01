import Colorselect from "./colorselect";
export default function Contact4but({
  title,
  text,
    onClick,
    active,
  svg,
}) {
  const styletot = {
    borderRadius: "30px",
    background: "#EEEEF2",
    display: "flex",
    padding: "16px",
    paddingRight: "20px",
    justifyContent: "start",
    alignItems: "start",
    gap: "4px",
    cursor: "pointer",
  };
  const stylep1 = {
    display: "Flex",
    justifyContent: "start",
    alignItems: "start",
    // gap: "16px",
    flexDirection: "column",
  };
  const styletxt01 = {
    color: "#000",
    fontFamily: "Itim",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
  const styletxt02 = {
    // width: "480px",
    color: "#000",
    fontFamily: "inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    letterSpacing: "0.5px",
    ...(active && {
      marginRight: "25px",
      marginBottom: "20px",
      marginTop: "10px",
    }),
  };
  const logoStyle = {
    width: "30px",
    height: "30px",
    cursor: "pointer",
    marginTop: "2px",
  };

  const handleDivClick = () => {
    onClick();
  };

  return (
    <div style={styletot} onClick={handleDivClick({title})}>
      <div style={logoStyle}>{svg}</div>
      <div style={stylep1}>
        <div style={styletxt01}>{title}</div>
        <div style={styletxt02}>{text}</div>
      </div>
    </div>
  );
}
