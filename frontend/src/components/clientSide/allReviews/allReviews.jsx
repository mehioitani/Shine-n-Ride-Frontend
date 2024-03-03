import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import axios from "axios";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid } from "swiper/modules";
import "./allReviews.css";

const Reviews = () => {

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_ENDPOINT + `api/reviews`
        );

        console.log("reviews response.data", response.data);
        setReviews(response.data.data);
        console.log("reviews response.data.data", response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, []);

  

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
      {reviews.map((review) => (
        <SwiperSlide key={review._id} className="reviews-client-content">
          <div className="reviews-card-client-wrapper">
            <div className="reviews-card-client">
              <div className="image-reviews-client-content">
                <span className="overlay"></span>
                <div className="reviews-client-card-image-content">
                  <img
                    src='https://res.cloudinary.com/dpocnh6zk/image/upload/v1709486629/Shine-n-Ride/users_oywpao.jpg'
                    alt=""
                    className="reviews-client-card-image"
                  />
                </div>
              </div>
              <div className="reviews-card-content">
                <h4 className="reviews-client-name">{review.name}</h4>
                <p className="reviews-client-description">{review.comment}</p>
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
