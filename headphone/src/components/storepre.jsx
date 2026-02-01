import "../style/store.css";
import Storeinf3but from "./storeinf3but";

export default function Storepre( {namehead , color , price , date ,img}) {

  return (
    <div className="storele">
      <div className="storeinfo">
        <div className="namehead">{namehead}</div>
        <div className="otherinf">
          <Storeinf3but title="Model:" text={color} />
          <Storeinf3but title="Price:" text={price} />
          <Storeinf3but title="Date:" text={date} />
        </div>
      </div>
      <img className="img" src={img} />
    </div>
  );
}
