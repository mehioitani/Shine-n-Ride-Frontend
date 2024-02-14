import "./navbar.css";
import Logo from "../../../assets/logo/logo.png";

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
      {/* <div className="cart-notification"> */}
        <button  style={{ "--i": 4 }} className="CartBtn">
          <span className="IconContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="rgb(17, 17, 17)"
              className="cart"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
            </svg>
          </span>
          <p className="text">Book Now</p>
        </button>
        {/* <a style={{ "--i": 4 }}>Book Now</a> */}
        {/* <a style={{ "--i": 4 }}>Book Now</a> */}
      </div>
    // </div>
  );
};

export default Navbar;
