import "./appointment.css";
import { Link as ScrollLink } from "react-scroll";

const Appointment = () => {
  return (
    <div className="widget-container">
      <div className="appointment-title">
        <h1>The Shine 'n' Ride Car Care Treatment</h1>
      </div>
      <div className="widget-container-image">
        <div className="widget-content">
          <img
            src="https://res.cloudinary.com/dpocnh6zk/image/upload/v1709480819/Shine-n-Ride/step1_pxtjcl.png"
            alt=""
          />
          <h2>Book Instantly</h2>
          <p>
            Select your mobile car wash package and just tell us when, where and
            we’ll be there. It’s that easy!
          </p>
        </div>
        <div className="widget-content">
          <img
            src="https://res.cloudinary.com/dpocnh6zk/image/upload/v1709480819/Shine-n-Ride/step3_mzwbg5.png"
            alt=""
          />
          <h2>We Wash & Detail</h2>
          <p>
            Once booked, we’ll deliver one of our mobile car detailing Sydney
            technicians, who will be equipped & ready to leave your car looking
            flawless.
          </p>
        </div>
        <div className="widget-content">
          <img
            src="https://res.cloudinary.com/dpocnh6zk/image/upload/v1709480819/Shine-n-Ride/step2_e9oqmx.png"
            alt=""
          />
          <h2>Enjoy a Flawless Finish</h2>
          <p>
            The time you would have spent cleaning can now be used doing the
            things you love, and trust that you’ll come back to a glistening
            car.
          </p>
        </div>
      </div>

      <ScrollLink
              to="ourServices"
              spy={true}
              smooth={true}
              duration={500}
              offset={-200}
              style={{ textDecoration: "none", color: "inherit" }}
            >   <div className="book-now-button">
            <button className="carbutton">
            
              <div className="caption">Book Now</div>
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="car"
              >
                <path d="M355.975 292.25a24.82 24.82 0 1 0 24.82-24.81 24.84 24.84 0 0 0-24.82 24.81zm-253-24.81a24.81 24.81 0 1 1-24.82 24.81 24.84 24.84 0 0 1 24.81-24.81zm-76.67-71.52h67.25l-13.61 49.28 92-50.28h57.36l1.26 34.68 32 14.76 11.74-14.44h15.62l3.16 16c137.56-13 192.61 29.17 192.61 29.17s-7.52 5-25.93 8.39c-3.88 3.31-3.66 14.44-3.66 14.44h24.2v16h-52v-27.48c-1.84.07-4.45.41-7.06.47a40.81 40.81 0 1 0-77.25 23h-204.24a40.81 40.81 0 1 0-77.61-17.67c0 1.24.06 2.46.17 3.67h-36z"></path>
              </svg>
            </button>
          </div> </ScrollLink>
     
    </div>
  );
};

export default Appointment;
