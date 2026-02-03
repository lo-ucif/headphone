import "../style/contact.css";
export default function Contact4but({ title, text, onClick, active, svg }) {
  const logoStyle = {
    width: "30px",
    height: "30px",
    cursor: "pointer",
    marginTop: "2px",
    active,
  };

  const handleDivClick = () => {
    onClick();
  };

  return (
    <div className="styletot" onClick={handleDivClick({ title })}>
      <div style={logoStyle}>{svg}</div>
      <div className="stylep1">
        <div className="styletxt01">{title}</div>
        <div className="styletxt02">{text}</div>
      </div>
    </div>
  );
}
