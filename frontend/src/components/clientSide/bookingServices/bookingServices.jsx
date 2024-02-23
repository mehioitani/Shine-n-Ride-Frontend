import "./bookingServices.css";
import Detail from "../../../assets/services/detail.jpg";

const BookingServices = () => {
  const handleSliderInput = (e) => {
    const draggerContainer = document.querySelector(".dragger-container");
    draggerContainer.style.setProperty("--position", `${e.target.value}%`);
  };
  return (
    <>
      <div className="booking-services-card-client-container">
        <div className="booking-services-card-client">
          <div className="booking-services-card-image">
            <img src={Detail} alt="" className="booking-services-client-img" />
            <div className="booking-services-client-intro">
              <h1>Polish</h1>
            </div>
          </div>
          <div className="booking-services-card-content-client-wrapper">
            <div className="booking-services-card-content-client">
              <div className="booking-services-card-title-client">
                <h2>ayya shi</h2>
              </div>
              <ul>
                <li>car</li>
                <li>wash</li>
                <li>any</li>
                <li>time</li>
                <li>anywhere</li>
              </ul>
            </div>
          </div>
          <div className="section-two-cars-types-client-content">
            <div className="car-type-client grey">
              <div className="car-type-image-client">
                <img src={Detail} alt="" className="car-type-img-client" />
              </div>
              <div className="car-size-client">
                <p>small</p>
              </div>
              <div className="car-service-price-client">
                <p>15$</p>
              </div>
            </div>
            <div className="car-type-client">
              <div className="car-type-image-client">
                <img src={Detail} alt="" className="car-type-img-client" />
              </div>
              <div className="car-size-client">
                <p>small</p>
              </div>
              <div className="car-service-price-client">
                <p>15$</p>
              </div>
            </div>
            <div className="car-type-client grey">
              <div className="car-type-image-client">
                <img src={Detail} alt="" className="car-type-img-client" />
              </div>
              <div className="car-size-client">
                <p>small</p>
              </div>
              <div className="car-service-price-client">
                <p>15$</p>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-services-card-client">
          <div className="booking-services-card-image">
            <img src={Detail} alt="" className="booking-services-client-img" />
            <div className="booking-services-client-intro">
              <h1>Polish</h1>
            </div>
          </div>
          <div className="booking-services-card-content-client-wrapper">
            <div className="booking-services-card-content-client">
              <div className="booking-services-card-title-client">
                <h2>ayya shi</h2>
              </div>
              <ul>
                <li>car</li>
                <li>wash</li>
                <li>any</li>
                <li>time</li>
                <li>anywhere</li>
              </ul>
            </div>
          </div>
          <div className="section-two-cars-types-client-content">
            <div className="car-type-client grey">
              <div className="car-type-image-client">
                <img src={Detail} alt="" className="car-type-img-client" />
              </div>
              <div className="car-size-client">
                <p>small</p>
              </div>
              <div className="car-service-price-client">
                <p>15$</p>
              </div>
            </div>
            <div className="car-type-client">
              <div className="car-type-image-client">
                <img src={Detail} alt="" className="car-type-img-client" />
              </div>
              <div className="car-size-client">
                <p>small</p>
              </div>
              <div className="car-service-price-client">
                <p>15$</p>
              </div>
            </div>
            <div className="car-type-client grey">
              <div className="car-type-image-client">
                <img src={Detail} alt="" className="car-type-img-client" />
              </div>
              <div className="car-size-client">
                <p>small</p>
              </div>
              <div className="car-service-price-client">
                <p>15$</p>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-services-card-client">
          <div className="booking-services-card-image">
            <img src={Detail} alt="" className="booking-services-client-img" />
            <div className="booking-services-client-intro">
              <h1>Polish</h1>
            </div>
          </div>
          <div className="booking-services-card-content-client-wrapper">
            <div className="booking-services-card-content-client">
              <div className="booking-services-card-title-client">
                <h2>ayya shi</h2>
              </div>
              <ul>
                <li>car</li>
                <li>wash</li>
                <li>any</li>
                <li>time</li>
                <li>anywhere</li>
              </ul>
            </div>
          </div>
          <div className="section-two-cars-types-client-content">
            <div className="car-type-client grey">
              <div className="car-type-image-client">
                <img src={Detail} alt="" className="car-type-img-client" />
              </div>
              <div className="car-size-client">
                <p>small</p>
              </div>
              <div className="car-service-price-client">
                <p>15$</p>
              </div>
            </div>
            <div className="car-type-client">
              <div className="car-type-image-client">
                <img src={Detail} alt="" className="car-type-img-client" />
              </div>
              <div className="car-size-client">
                <p>small</p>
              </div>
              <div className="car-service-price-client">
                <p>15$</p>
              </div>
            </div>
            <div className="car-type-client grey">
              <div className="car-type-image-client">
                <img src={Detail} alt="" className="car-type-img-client" />
              </div>
              <div className="car-size-client">
                <p>small</p>
              </div>
              <div className="car-service-price-client">
                <p>15$</p>
              </div>
            </div>
          </div>
        </div>
      </div>








      {/* //////////////////////////////////////////// */}
      <main>
        <div className="dragger-container">
          <div className="image-container">
            <img
              className="image-before slider-image"
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="color photo"
            />
            <img
              className="image-after slider-image"
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="black and white"
            />
          </div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={50}
            aria-label="Percentage of before photo shown"
            className="slider"
            onChange={handleSliderInput}
          />
          <div className="slider-line" aria-hidden="true" />
          <div className="slider-button" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width={256} height={256} fill="none" />
              <line
                x1={128}
                y1={40}
                x2={128}
                y2={216}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={16}
              />
              <line
                x1={96}
                y1={128}
                x2={16}
                y2={128}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={16}
              />
              <polyline
                points="48 160 16 128 48 96"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={16}
              />
              <line
                x1={160}
                y1={128}
                x2={240}
                y2={128}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={16}
              />
              <polyline
                points="208 96 240 128 208 160"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={16}
              />
            </svg>
          </div>
        </div>
      </main>
    </>
  );
};

export default BookingServices;
