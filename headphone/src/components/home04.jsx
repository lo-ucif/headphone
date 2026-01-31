import { useEffect, useState } from "react";
import Text3line from "./text3line";
import Home04but from "./home4but";
import imgst01 from "../img/pl g6.jpg";
import imgst02 from "../img/plg01.png";
import imgst03 from "../img/pl g9.jpg";
import imgst04 from "../img/plg02.jpg";
import imgst05 from "../img/pl g5.jpg";
import imgst06 from "../img/g14.png";
import imgst07 from "../img/6.jpg";
import imgst08 from "../img/10.jpg";
import imgst09 from "../img/7.jpg";
import imgst10 from "../img/8.jpg";
import imgst11 from "../img/12.jpg";

const home04Styleimg = {
  width: "705px",
  height: "705px",
  flexShrink: 0,
  aspectRatio: "1 / 1",
};
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
  const [activeimg, setActiveimg] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [lastcolor, setlastcolor] = useState(null);
  const handleClick = (id) => {
    setActiveButton(id);

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
  };
  useEffect(() => {
    switch (activeColor) {
      case "#876C8B":
        // eslint-disable-next-line react-hooks/set-state-in-effect
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
        setlastcolor(imgst10);
        setActiveimg(imgst10);
        break;
      case "#5C5C5C":
        setlastcolor(imgst11);
        setActiveimg(imgst11);
        break;
      case "#000000":
        setlastcolor(imgst07);
        setActiveimg(imgst07);
        break;
      default:
        setlastcolor(imgst01);
        setActiveimg(imgst01);
    }
  }, [activeColor]);

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
              setActiveColor={setActiveColor}
              activeColor={activeColor}
            />
          ))}
        </div>
        <div className="home04pref2">
          <img style={home04Styleimg} src={activeimg} />
        </div>
      </div>
    </div>
  );
}
