import "../style/store.css";
import imgst01 from "../img/pl g6.jpg";
import Storeinf3but from "./storeinf3but";

export default function Storepre() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const todayFormatted = `${day}/${month}/${year}`;

  return (
    <div className="storele">
      <div className="storeinfo">
        <div className="namehead">L simple version 01</div>
        <div className="otherinf">
          <Storeinf3but title="Color:" text="black" />
          <Storeinf3but title="Price:" text="200 $" />
          <Storeinf3but title="Date:" text={todayFormatted} />
        </div>
      </div>
      <img className="img" src={imgst01} alt="L simple version 01" />
    </div>
  );
}
