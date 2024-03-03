import "./bookingServices.css";
import { useCart } from "../../../hooks/useCart.jsx";
import { useParams } from "react-router-dom";
// MINI NAV INSIDE EACH CATEGORY
// ADD TO CART Check logic ideas
// ADMIN PANEL ON THE WAY
// SCROLLING WHEN NAVIGATING
// ACTIVE NAV LI
// AUTO CLOSE NAVBAR
// add to cart notification
// google maps
// use toastify on everything admin panel
// footer functionality


const BookingServices = ({ services }) => {
  const { addToCart } = useCart();
  const params = useParams();
  console.log(params.title);

  const filteredServices = services.filter(
    (s) => s?.categoryId.category_title === params.title
  );

  const refPage = (refresh) => {
    setRefreshPage(refreshPage + refresh);
  };
  return (
    <>
    <div className="services-title-intro">
    Our Services
    </div>
    
      <div className="booking-services-card-client-container">
        
        {filteredServices.map((service) => (
          <div className="booking-services-card-client" key={service._id}>
            <div className="booking-services-card-image">
              <img
                src={service.service_image}
                alt=""
                className="booking-services-client-img"
              />
              <div className="booking-services-client-intro">
                <h1>{service.service_title}</h1>
              </div>
            </div>
            <div className="booking-services-card-content-client-wrapper">
              <div className="booking-services-card-content-client">
                <div className="booking-services-card-title-client">
                  <h2>{service.service_description.miniTitle}</h2>
                </div>
                <ul>
                  <li>{service.service_description.first}</li>
                  <li>{service.service_description.second}</li>
                  <li>{service.service_description.third}</li>
                  <li>{service.service_description.fourth}</li>
                </ul>
              </div>
            </div>
            <div className="section-two-cars-types-client-content">
              <div className="car-type-client grey">
                <div className="car-type-image-client">
                  <img
                    src="https://res.cloudinary.com/dpocnh6zk/image/upload/v1709487111/Shine-n-Ride/small_iqddm1.png"
                    alt=""
                    className="car-type-img-client"
                  />
                </div>
                <div className="car-size-client">
                  <p>small</p>
                </div>
                <div className="car-service-price-client">
                  <p>{service.priceSmall}</p>
                </div>
              </div>
              <div className="car-type-client">
                <div className="car-type-image-client">
                  <img
                    src="https://res.cloudinary.com/dpocnh6zk/image/upload/v1709487109/Shine-n-Ride/medium_chbugh.png"
                    alt=""
                    className="car-type-img-client"
                  />
                </div>
                <div className="car-size-client">
                  <p>medium</p>
                </div>
                <div className="car-service-price-client">
                  <p>{service.priceMedium}</p>
                </div>
              </div>
              <div className="car-type-client grey">
                <div className="car-type-image-client">
                  <img
                    src="https://res.cloudinary.com/dpocnh6zk/image/upload/v1709487109/Shine-n-Ride/large_swycom.png"
                    alt=""
                    className="car-type-img-client"
                  />
                </div>
                <div className="car-size-client">
                  <p>large</p>
                </div>
                <div className="car-service-price-client">
                  <p>{service.priceLarge}</p>
                </div>
              </div>
            </div>
            <div className="book-now-button-service">
              <button
                className="carButtonService"
                onClick={() => {
                  addToCart({
                    ...service,
                    maxQuantity: service.quantity,
                  });
                }}
              >
                <div className="caption">Book Now</div>
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="car"
                >
                  <path d="M355.975 292.25a24.82 24.82 0 1 0 24.82-24.81 24.84 24.84 0 0 0-24.82 24.81zm-253-24.81a24.81 24.81 0 1 1-24.82 24.81 24.84 24.84 0 0 1 24.81-24.81zm-76.67-71.52h67.25l-13.61 49.28 92-50.28h57.36l1.26 34.68 32 14.76 11.74-14.44h15.62l3.16 16c137.56-13 192.61 29.17 192.61 29.17s-7.52 5-25.93 8.39c-3.88 3.31-3.66 14.44-3.66 14.44h24.2v16h-52v-27.48c-1.84.07-4.45.41-7.06.47a40.81 40.81 0 1 0-77.25 23h-204.24a40.81 40.81 0 1 0-77.61-17.67c0 1.24.06 2.46.17 3.67h-36z"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookingServices;
