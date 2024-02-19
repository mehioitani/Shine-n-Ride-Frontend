import Users from "../../../assets/users/users.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reviews.css";
const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Set the number of cards to show
    slidesToScroll: 1,
  };
  return (
    <Slider
      {...settings}
      className="reviews-client-container
    "
    >
      <div className="reviews-client-content">
        <div className="reviews-card-client-wrapper">
          <div className="reviews-card-client">
            <div className="image-reviews-client-content">
              <span className="overlay"></span>
              <div className="reviews-client-card-image-content">
                <img src={Users} alt="" className="reviews-client-card-image" />
              </div>
            </div>
            <div className="reviews-card-content">
              <h4 className="reviews-client-name">Mehio</h4>
              <p className="reviews-client-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                nostrum ratione quibusdam hic earum eveniet accusantium neque
                laborum non eos!
              </p>
              <button className="reviews-client-button">View More</button>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="reviews-client-content">
        <div className="reviews-card-client-wrapper">
          <div className="reviews-card-client">
            <div className="image-reviews-client-content">
              <span className="overlay"></span>
              <div className="reviews-client-card-image-content">
                <img src={Users} alt="" className="reviews-client-card-image" />
              </div>
            </div>
            <div className="reviews-card-content">
              <h4 className="reviews-client-name">Mehio</h4>
              <p className="reviews-client-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                nostrum ratione quibusdam hic earum eveniet accusantium neque
                laborum non eos!
              </p>
              <button className="reviews-client-button">View More</button>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="reviews-client-content">
        <div className="reviews-card-client-wrapper">
          <div className="reviews-card-client">
            <div className="image-reviews-client-content">
              <span className="overlay"></span>
              <div className="reviews-client-card-image-content">
                <img src={Users} alt="" className="reviews-client-card-image" />
              </div>
            </div>
            <div className="reviews-card-content">
              <h4 className="reviews-client-name">Mehio</h4>
              <p className="reviews-client-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                nostrum ratione quibusdam hic earum eveniet accusantium neque
                laborum non eos!
              </p>
              <button className="reviews-client-button">View More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-client-content">
        <div className="reviews-card-client-wrapper">
          <div className="reviews-card-client">
            <div className="image-reviews-client-content">
              <span className="overlay"></span>
              <div className="reviews-client-card-image-content">
                <img src={Users} alt="" className="reviews-client-card-image" />
              </div>
            </div>
            <div className="reviews-card-content">
              <h4 className="reviews-client-name">Mehio</h4>
              <p className="reviews-client-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                nostrum ratione quibusdam hic earum eveniet accusantium neque
                laborum non eos!
              </p>
              <button className="reviews-client-button">View More</button>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Reviews;
