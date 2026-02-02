import Hometext05 from "./hometext05";
import "../style/home3head.css";
export default function Home03head({ img, text01, prix }) {
  return (
    <div className="home-card">
      <img src={img} />
      <div>{text01}</div>
      <Hometext05 value={prix} />
    </div>
  );
}
