import "./navbar.css";
import Logo from "../../../assets/logo/logo.png";
import CarCart from "../../../assets/logo/carCart.png";

const Navbar = () => {
  return (
    <div className="navbar-wrapper-client">
      <img
        className="navbar-logo"
        src={Logo}
        alt="Logo"
        style={{ height: "150px", width: "250px" }}
      />
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <i className="bx bx-menu" id="menu-icon"></i>
        <i className="bx bx-x" id="close-icon"></i>
      </label>
      <nav className="navbar-client">
        <a style={{ "--i": 0 }}>Home</a>
        <a style={{ "--i": 1 }}>Our Services</a>
        <a style={{ "--i": 2 }}>Contact Us</a>
        <a style={{ "--i": 3 }}>About Us</a>
      </nav>
      <div className="book-now-bag">
        <button style={{ "--i": 4 }} className="carbutton">
          <div className="caption">Book Now</div>
          <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="car"
          >
            <path d="M355.975 292.25a24.82 24.82 0 1 0 24.82-24.81 24.84 24.84 0 0 0-24.82 24.81zm-253-24.81a24.81 24.81 0 1 1-24.82 24.81 24.84 24.84 0 0 1 24.81-24.81zm-76.67-71.52h67.25l-13.61 49.28 92-50.28h57.36l1.26 34.68 32 14.76 11.74-14.44h15.62l3.16 16c137.56-13 192.61 29.17 192.61 29.17s-7.52 5-25.93 8.39c-3.88 3.31-3.66 14.44-3.66 14.44h24.2v16h-52v-27.48c-1.84.07-4.45.41-7.06.47a40.81 40.81 0 1 0-77.25 23h-204.24a40.81 40.81 0 1 0-77.61-17.67c0 1.24.06 2.46.17 3.67h-36z"></path>
          </svg>
        </button>
        <img
          src={CarCart}
          alt="CarCart"
          style={{ height: "70px", width: "50px", "--i": 5 }}
          className="car-cart"
        />
      </div>
    </div>
  );
};

export default Navbar;
