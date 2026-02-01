import "../style/store.css";
import Text3line from "../components/text3line";
import Storepre from "../components/storepre";
export default function Store() {
  return (
    <div className="store">
      <Text3line title01={"store"} title02={"My purchases"} title03={"Wait"} />
      <div className="storepre">
        <Storepre />
        <Storepre />
        <Storepre />
        <Storepre />
      </div>
    </div>
  );
}
