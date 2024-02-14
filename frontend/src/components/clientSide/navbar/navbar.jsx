import "./navbar.css";
import Logo from "../../../assets/logo/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-wrapper-client">
      <img
        className="navbar-logo"
        src={Logo}
        alt="Logo"
        style={{ height: "120px", width: "auto" }}
      />
      <nav>
        <ul className="navbar-links-client">
          <li>Services</li>
          <li>Projects</li>
          <li>About</li>
          <li>About</li>
          <li>About</li>
        </ul>
      </nav>
      <button>Book Now</button>
    </div>
  );
};

export default Navbar;
