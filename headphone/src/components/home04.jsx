import { useState } from "react";
import "../style/home04.css";
import "../style/home.css";
import Text3line from "./text3line";
import Home04but from "./home4but";
import imgst01 from "../img/pl g6.webp";
import imgst02 from "../img/plg01.webp";
import imgst03 from "../img/pl g9.webp";
import imgst04 from "../img/plg02.webp";
import imgst05 from "../img/pl g5.webp";
import imgst06 from "../img/g14.webp";
import imgst07 from "../img/6.webp";
import imgst08 from "../img/10.webp";
import imgst09 from "../img/7.webp";
import imgst10 from "../img/8.webp";
import imgst11 from "../img/12.webp";

const info = [
  {
    id: "1",
    title: "Modern color",
    text: "Choose the color that suits you, with a wide range of options designed to match every taste and style.",
  },
  {
    id: "2",
    title: "Smart button",
    text: "Enjoy intuitive tactile controls that let you manage music, calls, and volume with simple, responsive touches—no need to reach for your device.",
  },
  {
    id: "3",
    title: "Comfortable shape",
    text: "A comfortable, ergonomic shape designed to fit naturally, ensuring long-lasting comfort even during extended listening sessions.",
  },
  {
    id: "4",
    title: "Modern style",
    text: "A sleek, ergonomic shape designed for a natural fit and lasting comfort.",
  },
];

export default function Home04() {
  const [activeButton, setActiveButton] = useState("1");
  const [activeimg, setActiveimg] = useState(imgst01);
  const [activeColor, setActiveColor] = useState(null);
  const [lastcolor, setlastcolor] = useState(imgst01);
  const [fade, setFade] = useState(false);
  const handleClick = (id) => {
    setActiveButton(id);

    setFade(true);

    setTimeout(() => {
      switch (id) {
        case "1":
          setActiveimg(lastcolor);
          break;
        case "2":
          setActiveimg(imgst02);
          break;
        case "3":
          setActiveimg(imgst03);
          break;
        case "4":
          setActiveimg(imgst04);
          break;
        default:
          break;
      }

      setFade(false);
    }, 200);
  };

  const changedcolorimg = (activedColor) => {
    setActiveColor(activedColor);
    setFade(true);
    setTimeout(() => {
      switch (activedColor) {
        case "#876C8B":
          setActiveimg(imgst05);
          setlastcolor(imgst05);
          break;
        case "#86B2BD":
          setActiveimg(imgst06);
          setlastcolor(imgst06);
          break;
        case "#224692":
          setActiveimg(imgst01);
          setlastcolor(imgst01);
          break;
        case "#76563F":
          setActiveimg(imgst08);
          setlastcolor(imgst08);
          break;
        case "#FFFFFF":
          setActiveimg(imgst09);
          setlastcolor(imgst09);
          break;
        case "#B6B6B6":
          setActiveimg(imgst10);
          setlastcolor(imgst10);
          break;
        case "#5C5C5C":
          setActiveimg(imgst11);
          setlastcolor(imgst11);
          break;
        case "#000000":
          setActiveimg(imgst07);
          setlastcolor(imgst07);

          break;
        default:
          setActiveimg(imgst01);
          setlastcolor(imgst01);
      }
      setFade(false);
    }, 200);
  };

  return (
    <div className="home04">
      <Text3line
        title01={"Design"}
        title02={"Designed to Fit Everyone"}
        title03={"+ 8 Color Options"}
      />

      <div className="home04pre">
        <div className="home04pref1">
          {info.map((btn, index) => (
            <Home04but
              key={btn.id}
              title={btn.title}
              active={activeButton === btn.id ? true : false}
              text={activeButton === btn.id ? btn.text : ""}
              onClick={() => handleClick(btn.id)}
              img={imgst01}
              colorselect={index === 0 && activeButton === btn.id}
              setActiveColor={changedcolorimg}
              activeColor={activeColor}
            />
          ))}
        </div>
        <div className="home04pref2">
          <img className={fade ? "fade" : ""} src={activeimg} />
        </div>
      </div>
    </div>
  );
}
