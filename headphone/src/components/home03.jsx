import Text3line from "./text3line";
import Home03head from "./home03head";
import img01 from "../img/2.jpg";
import img02 from "../img/1.jpg";
import img03 from "../img/3.jpg";
import img04 from "../img/4.jpg";
import img05 from "../img/5.jpg";
export default function Home03() {
  return (
    <div className="home03">
      <Text3line
        title01="Family"
        title02="Our Headphones Family"
        title03="+ 5 Model in this headphone"
      />
      <div className="home03pre">
        <Home03head prix={"100 $"} text01={"L-calssic V1"} img={img01} />
        <Home03head prix={"90 $"} text01={"L-simple V1"} img={img02} />
        <Home03head prix={"120 $"} text01={"L-light V1"} img={img03} />
        <Home03head prix={"130 $"} text01={"L-mic V1"} img={img04} />
        <Home03head prix={"140 $"} text01={"L-mic&light V1"} img={img05} />
      </div>
    </div>
  );
}
