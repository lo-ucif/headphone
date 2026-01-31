import Text3line from "../components/text3line";
import Familyelement from "./familyelement";
export default function Familydes() {
  return (
    <div className="family04pre">
      <Text3line
        title01={"v1 2021"}
        title02={"version one headphones"}
        title03={"after two year years"}
      />
      <div>
        <Familyelement />
        <Familyelement />
        <Familyelement />
        <Familyelement />
        <Familyelement />
        <Familyelement />
      </div>
    </div>
  );
}
