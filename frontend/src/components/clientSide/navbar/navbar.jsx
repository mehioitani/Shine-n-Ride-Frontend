import "./navbar.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useCart } from "../../../hooks/useCart";

const Navbar = () => {
  const { cartServices } = useCart();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="navbar-wrapper-client">
      <Link to="/">
        <img
          className="navbar-logo"
          src="https://res.cloudinary.com/dpocnh6zk/image/upload/v1709487303/Shine-n-Ride/logo_pfpkgg.png"
          alt="Logo"
          style={{ height: "150px", width: "250px", cursor: "pointer" }}
          onClick={scrollToTop}
        />
      </Link>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons-nav">
        <i className="bx bx-menu" id="menu-icon"></i>
        <i className="bx bx-x" id="close-icon"></i>
      </label>
      <nav className="navbar-client">
        <ul>
          <li className="line" style={{ "--i": 0 }}>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={scrollToTop}
            >
              Home
            </Link>
          </li>
          <li className="line" style={{ "--i": 1 }}>
            <ScrollLink
              to="ourServices"
              spy={true}
              smooth={true}
              duration={500}
              offset={-200}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Our Services
            </ScrollLink>
          </li>
          <li className="line" style={{ "--i": 2 }}>
            <Link
              to="/contactus"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={scrollToTop}
            >
              Contact Us
            </Link>
          </li>
          <li className="line" style={{ "--i": 3 }}>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-180}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About Us
            </ScrollLink>
          </li>
        </ul>
      </nav>
      <Link to="/addToCart">
        <div
          className="car-cart-wrapper"
          style={{ height: "150px", width: "200px", "--i": 4 }}
        >
          <img
            src="https://res.cloudinary.com/dpocnh6zk/image/upload/v1709487302/Shine-n-Ride/carCart_ckzunf.png"
            alt="CarCart"
            style={{
              height: "48px",
              width: "40px",
              "--i": 4,
              cursor: "pointer",
            }}
            className="car-cart"
          />
          {cartServices.length > 0 && (
            <p className="counter-cart">{cartServices?.length}</p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
