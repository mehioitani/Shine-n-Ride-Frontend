import Users from "../../../assets/users/users.jpg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid } from "swiper/modules";
import "./reviews.css";

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      name: "John Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Jane Smith",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      name: "Bob Anderson",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 5,
      name: "Bob Anderson",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <Swiper
      autoplay={true}
      slidesPerView={3}
      grid={{
        rows: 1,
      }}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Grid]}
      className="mySwiper"
      breakpoints={{
        1100: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        400: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }}
    >
      {reviewsData.map((review) => (
        <SwiperSlide key={review.id} className="reviews-client-content">
          <div className="reviews-card-client-wrapper">
            <div className="reviews-card-client">
              <div className="image-reviews-client-content">
                <span className="overlay"></span>
                <div className="reviews-client-card-image-content">
                  <img
                    src={Users}
                    alt=""
                    className="reviews-client-card-image"
                  />
                </div>
              </div>
              <div className="reviews-card-content">
                <h4 className="reviews-client-name">{review.name}</h4>
                <p className="reviews-client-description">
                  {review.description}
                </p>
                <button className="reviews-client-button">View More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Reviews;
