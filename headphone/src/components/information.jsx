import { useState, useEffect } from "react";
import "../style/information.css";
import "../style/buttonStyle.css";

export default function Information({ text010, text020, onClose, img, info }) {
  const [animate, setAnimate] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAnimate(true);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setAnimate(false);
    setTimeout(() => {
      onClose();
      setClosing(false);
    }, 300);
  };

  return (
    <div className="familyinfo">
      <div
        className={`familyinfpre ${animate ? "show" : "hide"} ${closing ? "hide" : ""}`}
      >
        <div className="familyinfpref1">
          <div className="finff1inf">
            <div className="infname">{text010}</div>
            <div className="textinf">
              {info.map((inf, index) => (
                <div key={index}>• {inf}</div>
              ))}
            </div>
            <div className="buttonp">{text020}</div>
          </div>
        </div>
        <div className="familyinfpref2">
          <img className="falinfStyleimg" src={img} />
        </div>
      </div>

      <button className="butclose" onClick={handleClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 53 53"
          fill="none"
        >
          <path
            d="M39.75 13.25L13.25 39.75M39.75 39.75L13.25 13.25"
            stroke="black"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
