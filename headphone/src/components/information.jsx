import "../style/information.css";

const falinfStyleimg = {
  width: "600px",
  height: "600px",
};

export default function Information({ text010, text020, onClose, img, info }) {
  return (
    <div className="familyinfo">
      <div className="familyinfpre">
        <div className="familyinfpref1">
          <div className="finff1inf">
            <div className="infname">{text010}</div>
            <div className="textinf">
              {info.map((inf) => (
                <div>.{inf}</div>
              ))}
            </div>

            <div className="twobut">
              <div className="button">{text020}</div>
              <div className="button">Buy</div>
            </div>
          </div>
        </div>
        <div className="familyinfpref2">
          <img style={falinfStyleimg} src={img} />
        </div>
      </div>
      <button className="butclose" onClick={onClose}>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M25 50H59.375L45.8334 36.4583L48.625 33.3333L67.375 52.0833L48.625 70.8333L45.8334 67.7083L59.375 54.1667H25V50ZM87.5 52.0833C87.5 62.5815 83.3297 72.6497 75.9063 80.073C68.483 87.4963 58.4149 91.6667 47.9167 91.6667C26.0834 91.6667 8.33337 73.9583 8.33337 52.0833C8.33337 41.5852 12.5037 31.517 19.9271 24.0937C27.3504 16.6704 37.4186 12.5 47.9167 12.5C58.4149 12.5 68.483 16.6704 75.9063 24.0937C83.3297 31.517 87.5 41.5852 87.5 52.0833ZM83.3334 52.0833C83.3334 42.6902 79.602 33.6819 72.9601 27.04C66.3182 20.3981 57.3098 16.6667 47.9167 16.6667C38.5236 16.6667 29.5153 20.3981 22.8733 27.04C16.2314 33.6819 12.5 42.6902 12.5 52.0833C12.5 61.4764 16.2314 70.4848 22.8733 77.1267C29.5153 83.7686 38.5236 87.5 47.9167 87.5C52.5677 87.5 57.1731 86.5839 61.4701 84.8041C65.767 83.0242 69.6713 80.4154 72.9601 77.1267C76.2488 73.838 78.8576 69.9337 80.6374 65.6367C82.4173 61.3398 83.3334 56.7343 83.3334 52.0833Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
}
