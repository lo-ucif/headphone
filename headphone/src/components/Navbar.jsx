import { NavLink } from "react-router-dom";
import Logo from "./logo";
import "../style/navbar.css";
import { useState } from "react";

export default function Navbar() {
  const svgs = [
    <svg
      key="menu"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 100 87"
      fill="none"
    >
      <path
        d="M5 5H94.8333M5 43.5H94.8333M5 82H94.8333"
        stroke="black"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>,

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M9.05331 30.9468C10.0133 31.9068 11.57 31.9068 12.5316 30.9468L20 23.4768L27.4683 30.9451C27.9293 31.4064 28.5547 31.6656 29.2069 31.6657C29.859 31.6659 30.4846 31.407 30.9458 30.9459C31.4071 30.4849 31.6663 29.8595 31.6664 29.2074C31.6666 28.5552 31.4077 27.9297 30.9466 27.4684L23.4783 20.0001L30.945 12.5334C31.1734 12.3052 31.3546 12.0341 31.4782 11.7358C31.6018 11.4375 31.6655 11.1178 31.6656 10.7949C31.6657 10.4719 31.6022 10.1522 31.4787 9.85381C31.3552 9.55544 31.1741 9.28433 30.9458 9.05594C30.7175 8.82755 30.4465 8.64635 30.1482 8.52271C29.8499 8.39906 29.5301 8.33538 29.2072 8.33531C28.8843 8.33523 28.5645 8.39875 28.2662 8.52226C27.9678 8.64576 27.6967 8.82682 27.4683 9.0551L20.0016 16.5218L12.5316 9.0551C12.0708 8.59385 11.4457 8.33454 10.7937 8.33423C10.1417 8.33392 9.51623 8.59262 9.05498 9.05344C8.59372 9.51425 8.33441 10.1394 8.3341 10.7914C8.33379 11.4434 8.5925 12.0688 9.05331 12.5301L16.5233 20.0001L9.05331 27.4701C8.82502 27.6984 8.64394 27.9694 8.52039 28.2677C8.39684 28.5659 8.33325 28.8856 8.33325 29.2084C8.33325 29.5313 8.39684 29.851 8.52039 30.1492C8.64394 30.4475 8.82502 30.7185 9.05331 30.9468Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>,
  ];

  const [actnav, setactnav] = useState(false);
  const [actbut, setactbut] = useState(1);
  const navbarchanged = () => {
    if (actbut == 0) {
      setactbut(1);
      setactnav(true);
    } else {
      setactbut(0);
      setactnav(false);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <Logo />

        <div className="dachboard">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/family" className="nav-link">
            Family
          </NavLink>

          <NavLink to="/store" className="nav-link">
            Store
          </NavLink>

          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </div>

        <NavLink to="/store" className="nav-link">
          <button className="navbarbut">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
            >
              {" "}
              <g clip-path="url(#clip0_9_327)">
                {" "}
                <path
                  d="M17.5 6H15C15 4.4087 14.4732 2.88258 13.5355 1.75736C12.5979 0.632141 11.3261 0 10 0C8.67392 0 7.40215 0.632141 6.46447 1.75736C5.52678 2.88258 5 4.4087 5 6H2.5C1.83696 6 1.20107 6.31607 0.732233 6.87868C0.263392 7.44129 0 8.20435 0 9L0 19C0.00132321 20.3256 0.440735 21.5964 1.22185 22.5338C2.00296 23.4711 3.062 23.9984 4.16667 24H15.8333C16.938 23.9984 17.997 23.4711 18.7782 22.5338C19.5593 21.5964 19.9987 20.3256 20 19V9C20 8.20435 19.7366 7.44129 19.2678 6.87868C18.7989 6.31607 18.163 6 17.5 6ZM10 2C10.8841 2 11.7319 2.42143 12.357 3.17157C12.9821 3.92172 13.3333 4.93913 13.3333 6H6.66667C6.66667 4.93913 7.01786 3.92172 7.64298 3.17157C8.2681 2.42143 9.11594 2 10 2ZM18.3333 19C18.3333 19.7956 18.0699 20.5587 17.6011 21.1213C17.1323 21.6839 16.4964 22 15.8333 22H4.16667C3.50363 22 2.86774 21.6839 2.3989 21.1213C1.93006 20.5587 1.66667 19.7956 1.66667 19V9C1.66667 8.73478 1.75446 8.48043 1.91074 8.29289C2.06702 8.10536 2.27899 8 2.5 8H5V10C5 10.2652 5.0878 10.5196 5.24408 10.7071C5.40036 10.8946 5.61232 11 5.83333 11C6.05435 11 6.26631 10.8946 6.42259 10.7071C6.57887 10.5196 6.66667 10.2652 6.66667 10V8H13.3333V10C13.3333 10.2652 13.4211 10.5196 13.5774 10.7071C13.7337 10.8946 13.9457 11 14.1667 11C14.3877 11 14.5996 10.8946 14.7559 10.7071C14.9122 10.5196 15 10.2652 15 10V8H17.5C17.721 8 17.933 8.10536 18.0893 8.29289C18.2455 8.48043 18.3333 8.73478 18.3333 9V19Z"
                  fill="url(#paint0_linear_9_327)"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_9_327"
                  x1="10"
                  y1="0"
                  x2="10"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stop-color="#000000" />{" "}
                  <stop offset="1" stop-color="#000000" />{" "}
                </linearGradient>{" "}
                <clipPath id="clip0_9_327">
                  {" "}
                  <rect width="20" height="24" fill="white" />{" "}
                </clipPath>{" "}
              </defs>{" "}
            </svg>
          </button>
        </NavLink>
      </nav>
      <div className="navbarbutphone">
        <Logo />
        <div onClick={navbarchanged}>{svgs[actbut]}</div>
      </div>
      {actnav && (
        <div className="navbarphone">
          <div className="dachboardphone">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/family" className="nav-link">
              Family
            </NavLink>
            <NavLink to="/store" className="nav-link">
              Store
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
