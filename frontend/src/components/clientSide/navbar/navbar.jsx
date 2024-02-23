import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo/logo.png";
import CarCart from "../../../assets/logo/carCart.png";

const Navbar = () => {
  return (
    <div className="navbar-wrapper-client">
      <img
        className="navbar-logo"
        src={Logo}
        alt="Logo"
        style={{ height: "150px", width: "250px", cursor: "pointer" }}
      />
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons-nav">
        <i className="bx bx-menu" id="menu-icon"></i>
        <i className="bx bx-x" id="close-icon"></i>
      </label>
      <nav className="navbar-client">
        <ul>
          <li className="line" style={{ "--i": 0 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </li>
          <li className="line" style={{ "--i": 1 }}>
            Our Services
          </li>
          <li className="line" style={{ "--i": 2 }}>
            <Link
              to="/contactus"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact Us
            </Link>
          </li>
          <li className="line" style={{ "--i": 3 }}>
            About Us
          </li>
        </ul>
      </nav>
      <div
        className="car-cart-wrapper"
        style={{ height: "150px", width: "200px", "--i": 4 }}
      >
        <img
          src={CarCart}
          alt="CarCart"
          style={{ height: "48px", width: "40px", "--i": 4, cursor: "pointer" }}
          className="car-cart"
        />
      </div>
    </div>
  );
};

export default Navbar;
