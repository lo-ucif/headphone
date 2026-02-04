import Familydes from "../components/familydes";
import "../style/family.css";
import img01 from "../img/11.webp";
import img02 from "../img/12.webp";
import img03 from "../img/16.webp";
import img04 from "../img/17.webp";
import img05 from "../img/22.webp";
import img06 from "../img/19.webp";
import img07 from "../img/13.webp";
import img08 from "../img/20.webp";
import img09 from "../img/21.webp";
import img10 from "../img/14.webp";
import img11 from "../img/18.webp";
import img12 from "../img/15.webp";
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
  const headsetItems = [
    {
      img: img07,
      text01: "X-Pro V1",
      text02: "160 $",
      textinf: [
        "Sound power up to 115dB",
        "Frequency range 18Hz – 22kHz",
        "Noise cancellation up to -35dB",
        "Bluetooth version 5.3",
        "Battery life up to 35 hours",
        "Fast charging 15 min = 5 hours",
        "Water & dust resistance IPX6",
        "Dual microphone 2×",
      ],
    },
    {
      img: img08,
      text01: "Y-Light V2",
      text02: "140 $",
      textinf: [
        "Sound power up to 110dB",
        "Frequency range 20Hz – 20kHz",
        "Noise cancellation up to -28dB",
        "Bluetooth version 5.2",
        "Battery life up to 28 hours",
        "Fast charging 10 min = 3 hours",
        "Water & dust resistance IPX5",
        "Dual microphone 1×",
      ],
    },
    {
      img: img09,
      text01: "Z-Head V1",
      text02: "135 $",
      textinf: [
        "Sound power up to 105dB",
        "Frequency range 20Hz – 20kHz",
        "Noise cancellation up to -25dB",
        "Bluetooth version 5.0",
        "Battery life up to 26 hours",
        "Fast charging 10 min = 2.5 hours",
        "Water & dust resistance IPX4",
        "Dual microphone 1×",
      ],
    },
    {
      img: img10,
      text01: "X-Light Pro",
      text02: "170 $",
      textinf: [
        "Sound power up to 118dB",
        "Frequency range 18Hz – 22kHz",
        "Noise cancellation up to -38dB",
        "Bluetooth version 5.3",
        "Battery life up to 36 hours",
        "Fast charging 10 min = 4 hours",
        "Water & dust resistance IPX6",
        "Dual microphone 2×",
      ],
    },
    {
      img: img11,
      text01: "Y-Head Max",
      text02: "155 $",
      textinf: [
        "Sound power up to 112dB",
        "Frequency range 19Hz – 21kHz",
        "Noise cancellation up to -30dB",
        "Bluetooth version 5.2",
        "Battery life up to 30 hours",
        "Fast charging 10 min = 3 hours",
        "Water & dust resistance IPX5",
        "Dual microphone 2×",
      ],
    },
    {
      img: img12,
      text01: "Z-Light V3",
      text02: "145 $",
      textinf: [
        "Sound power up to 108dB",
        "Frequency range 20Hz – 20kHz",
        "Noise cancellation up to -27dB",
        "Bluetooth version 5.1",
        "Battery life up to 25 hours",
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
      <Familydes
        item={headsetItems}
        title01={"v 2024"}
        title02={"version two headphones"}
        title03={"after 2 years"}
      />
    </div>
  );
}
