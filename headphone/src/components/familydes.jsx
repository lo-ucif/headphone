import { useState } from "react";
import Text3line from "../components/text3line";
import Familyelement from "./familyelement";
import Information from "./information";

export default function Familydes({ item, title01, title02, title03 }) {
  const [show, setshow] = useState(false);
  const [selected, setlected] = useState(null);
  const openInformation = (element) => {
    setshow(true);
    setlected(element);

  };
  return (
    <div>
      <div className="family04pre">
        <Text3line title01={title01} title02={title02} title03={title03} />
        <div className="family6cadre">
          {item.map((le, index) => (
            <Familyelement
              key={index}
              img={le.img}
              text01={le.text01}
              text02={le.text02}
              more={() => openInformation(le)}
            />
          ))}
        </div>
      </div>
      {show && (
        <Information
          text010={selected.text01}
          text020={selected.text02}
          img={selected.img}
          info={selected.textinf}
          onClose={() => setshow(false)}
        />
      )}
    </div>
  );
}
