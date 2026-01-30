import Colorselect from "./colorselect";
export default function Home04but({
  title,
  text,
  onClick,
  active,
  colorselect,
}) {
  const styletot = {
    borderRadius: "30px",
    background: "#EEEEF2",
    display: "flex",
    padding: "12px",
    paddingRight: "20px",
    justifyContent: "start",
    alignItems: "start",
    gap: "4px",
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
    width: "40px",
    height: "40px",
    flexShrink: 0, // flex-shrink
    aspectRatio: "1 / 1", // aspect-ratio
  };
  const changeStyle = () => {
    // setIsActive((prev) => !prev);
  };

  const handleDivClick = () => {
    onClick();
    changeStyle();
  };

  return (
    <div style={styletot} onClick={handleDivClick}>
      <svg
        style={logoStyle}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M19.9999 33.5999C12.4799 33.5999 6.3999 27.5199 6.3999 19.9999C6.3999 12.4799 12.4799 6.3999 19.9999 6.3999C27.5199 6.3999 33.5999 12.4799 33.5999 19.9999C33.5999 27.5199 27.5199 33.5999 19.9999 33.5999ZM19.9999 7.9999C13.3599 7.9999 7.9999 13.3599 7.9999 19.9999C7.9999 26.6399 13.3599 31.9999 19.9999 31.9999C26.6399 31.9999 31.9999 26.6399 31.9999 19.9999C31.9999 13.3599 26.6399 7.9999 19.9999 7.9999Z"
          fill="black"
        />
        <path d="M12.8 19.2002H27.2V20.8002H12.8V19.2002Z" fill="black" />
        <path d="M19.2 12.7998H20.8V27.1998H19.2V12.7998Z" fill="black" />
      </svg>
      <div style={stylep1}>
        <div style={styletxt01}>{title}</div>
        <div style={styletxt02}>{text}</div>
        <div>{colorselect && <Colorselect />}</div>
      </div>
    </div>
  );
}
