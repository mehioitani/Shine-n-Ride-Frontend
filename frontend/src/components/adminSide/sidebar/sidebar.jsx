import CarouselIcon from "../../../assets/sidebar/carouselIcon.png";
import CategoryIcon from "../../../assets/sidebar/categoryIcon.png";
import ServiceIcon from "../../../assets/sidebar/serviceIcon.png";
import OrderIcon from "../../../assets/sidebar/orderIcon.png";
import ReviewIcon from "../../../assets/sidebar/reviewIcon.png";

import { useLogout } from "../../../hooks/useLogout.jsx";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const { logout } = useLogout();

  const handleClick = async () => {
    logout();
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-title">
          <span>Shine 'n' Ride</span>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-section">
            <div className="sidebar-link">
              <img src={CarouselIcon} />
              <Link
                to="/admin/carousels"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>Carousel</span>
              </Link>
            </div>
            <div className="sidebar-link">
              <img src={CategoryIcon} alt="" style={{ width: "20px" }} />
              <Link
                to="/admin/categories"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>Categories</span>
              </Link>
            </div>
            <div className="sidebar-link">
              <img src={ServiceIcon} alt="" style={{ width: "20px" }} />
              <span>Services</span>
            </div>
            <div className="sidebar-link">
              <img src={OrderIcon} alt="" />
              <Link
                to="/admin/orders"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>Orders</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-section">
            <div className="sidebar-link">
              <img src={ReviewIcon} alt="" />
              <Link
                to="/admin/reviews"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>Reviews</span>
              </Link>
            </div>
            <div className="sidebar-link">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <span>Settings</span>
            </div>
            <div className="sidebar-link">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span>Messages</span>
            </div>
          </div>
        </div>
        <div className="sidebar-bottom-link">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span onClick={handleClick} style={{ cursor: "pointer" }}>
            Log Out
          </span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
