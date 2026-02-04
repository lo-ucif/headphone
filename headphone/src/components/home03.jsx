import Text3line from "./text3line";
import Home03head from "./home03head";
import { NavLink } from "react-router-dom";
import img01 from "../img/12.webp";
import img02 from "../img/11.webp";
import img03 from "../img/13.webp";
import img04 from "../img/14.webp";
import img05 from "../img/15.webp";
export default function Home03() {
  return (
    <div className="home03">
      <Text3line
        title01="Family"
        title02="Our Headphones Family"
        title03="+ 5 Model in this headphone"
      />
      <div className="home03pre">
        <NavLink to="/family" className="nav-link">
          <Home03head prix={"100 $"} text01={"L-calssic V1"} img={img01} />
        </NavLink>
        <NavLink to="/family" className="nav-link">
          <Home03head prix={"90 $"} text01={"L-simple V1"} img={img02} />
        </NavLink>
        <NavLink to="/family" className="nav-link">
          <Home03head prix={"120 $"} text01={"L-light V1"} img={img03} />
        </NavLink>
        <NavLink to="/family" className="nav-link">
          <Home03head prix={"130 $"} text01={"L-mic V1"} img={img04} />
        </NavLink>
        <NavLink to="/family" className="nav-link">
          <Home03head prix={"140 $"} text01={"L-mic&light V1"} img={img05} />
        </NavLink>
      </div>
    </div>
  );
}
