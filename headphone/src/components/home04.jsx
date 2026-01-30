import { useState } from "react";
import Text3line from "./text3line";
import Home04but from "./home4but";
import imgst01 from "../img/pl g6.jpg";
import imgst02 from "../img/plg01.png";
import imgst03 from "../img/pl g9.jpg";
import imgst04 from "../img/plg02.jpg";
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
  const [activeimg, setActiveimg] = useState(imgst01);

  const handleClick = (id) => {
    setActiveButton(id);

    switch (id) {
      case "1":
        setActiveimg(imgst01);
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
