import { NavLink } from "react-router-dom";
import Logo from "./logo";
import "../style/navbar.css";

export default function Navbar() {
  return (
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
              <stop stop-color="#7C736A" />{" "}
              <stop offset="1" stop-color="#ADAEA8" />{" "}
            </linearGradient>{" "}
            <clipPath id="clip0_9_327">
              {" "}
              <rect width="20" height="24" fill="white" />{" "}
            </clipPath>{" "}
          </defs>{" "}
        </svg>
      </button>
    </nav>
  );
}
