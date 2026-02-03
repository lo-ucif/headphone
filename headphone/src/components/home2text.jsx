import "../style/home.css";

export default function Home2text({ value, logo }) {
  return (
    <div className="style2text">
      <div className="stylelogo">{logo}</div>
      <div className="home2pretxt">{value}</div>
    </div>
  );
}
