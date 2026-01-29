import "../style/home.css";
import Homebut01 from "../components/homebut01";
import Hometext05 from "../components/hometext05";
export default function Home01() {
  return (
    <div className="home01">
      <div className="homepresentation">
        <div className="homepertext">
          <h1>Experience sound like never before</h1>
          <p>
            Welcome to lunax — premium audio designed for your lifestyle.
            Powerful sound, modern comfort, and performance that lasts all day,
            wherever you go.
          </p>
          <div className="home2but">
            <Homebut01 value="shop" />
            <Homebut01 value="buy" />
          </div>
          <div className="home5text">
            <Hometext05 value={"Classis"} />
            <Hometext05 value={"Microphone"} />
            <Hometext05 value={"Quality"} />
            <Hometext05 value={"Light"} />
            <Hometext05 value={"Bluetooth"} />
          </div>
        </div>
      </div>
    </div>
  );
}