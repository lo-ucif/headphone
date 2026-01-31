import Familydes from "../components/familydes";
import "../style/family.css";
import Information from "../components/information";
import img01 from "../img/g14.png";
import img02 from "../img/1.jpg";
import img03 from "../img/2.jpg";
import img04 from "../img/3.jpg";
import img05 from "../img/4.jpg";
import img06 from "../img/5.jpg";
export default function Family() {
  const familyItems = [
    {
      img: img01,
      text01: "L-Light V1",
      text02: "120 $",
      textinf: [
        "Sound power up to 110dB",
        "Frequency range 20Hz – 20kHz",
        "Noise cancellation up to -30dB",
        "Bluetooth version 5.2",
        "Battery life up to 30 hours",
        "Fast charging 10 min = 3 hours",
        "Water & dust resistance IPX5",
        "Dual microphone 2×",
      ],
    },
    {
      img: img02,
      text01: "L-Head V2",
      text02: "130 $",
      textinf: [
        "Sound power up to 105dB",
        "Frequency range 20Hz – 20kHz",
        "Noise cancellation up to -25dB",
        "Bluetooth version 5.0",
        "Battery life up to 25 hours",
        "Fast charging 10 min = 2 hours",
        "Water & dust resistance IPX4",
        "Dual microphone 1×",
      ],
    },
    {
      img: img03,
      text01: "M-Head V1",
      text02: "115 $",
      textinf: [
        "Sound power up to 100dB",
        "Frequency range 20Hz – 20kHz",
        "Noise cancellation up to -20dB",
        "Bluetooth version 5.0",
        "Battery life up to 20 hours",
        "Fast charging 10 min = 2 hours",
        "Water & dust resistance IPX4",
        "Dual microphone 1×",
      ],
    },
    {
      img: img04,
      text01: "S-Light V3",
      text02: "140 $",
      textinf: [
        "Sound power up to 108dB",
        "Frequency range 20Hz – 20kHz",
        "Noise cancellation up to -28dB",
        "Bluetooth version 5.2",
        "Battery life up to 26 hours",
        "Fast charging 10 min = 2.5 hours",
        "Water & dust resistance IPX5",
        "Dual microphone 2×",
      ],
    },
    {
      img: img05,
      text01: "L-Head Pro",
      text02: "150 $",
      textinf: [
        "Sound power up to 112dB",
        "Frequency range 20Hz – 21kHz",
        "Noise cancellation up to -32dB",
        "Bluetooth version 5.2",
        "Battery life up to 30 hours",
        "Fast charging 10 min = 3 hours",
        "Water & dust resistance IPX5",
        "Dual microphone 2×",
      ],
    },
    {
      img: img06,
      text01: "M-Light V2",
      text02: "125 $",
      textinf: [
        "Sound power up to 107dB",
        "Frequency range 20Hz – 20kHz",
        "Noise cancellation up to -27dB",
        "Bluetooth version 5.1",
        "Battery life up to 24 hours",
        "Fast charging 10 min = 2.5 hours",
        "Water & dust resistance IPX5",
        "Dual microphone 2×",
      ],
    },
  ];

  return (
    <div>
      <Familydes
        item={familyItems}
        title01={"v1 2022"}
        title02={"version one headphones"}
        title03={"after 4 years"}
      />
    </div>
  );
}
