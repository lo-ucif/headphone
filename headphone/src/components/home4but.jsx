import Colorselect from "./colorselect";
import "../style/home04.css";
export default function Home04but({
  title,
  text,
  onClick,
  active,
  colorselect,
  setActiveColor,
  activeColor,
}) {
  const changeStyle = () => {
    // setIsActive((prev) => !prev);
  };

  const handleDivClick = () => {
    onClick();
    changeStyle();
  };

  return (
    <div
      className={`styletot ${active ? "active" : ""}`}
      // className="styletot"
      onClick={handleDivClick}
    >
      <svg
        className="logostyle"
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
      <div className="stylep1">
        <div className="styletxt01">{title}</div>
        <div className={`styletxt02 ${active ? "active" : ""}`}>{text}</div>
        <div>
          {colorselect && (
            <Colorselect
              setActiveColor={setActiveColor}
              activeColor={activeColor}
            />
          )}
        </div>
      </div>
    </div>
  );
}
