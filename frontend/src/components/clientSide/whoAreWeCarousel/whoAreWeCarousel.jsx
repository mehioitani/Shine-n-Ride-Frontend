import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles

import Image from "../../../assets/services/detail.jpg";
import Image1 from "../../../assets/services/detail1.jpg";
import Image2 from "../../../assets/services/detail2.jpg";
import "./whoAreWeCarousel.css";

const MyCarousel = () => {
  return (
    <div className="who-are-we-carousel-container">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000} 
        stopOnHover={true}
        useKeyboardArrows={true}
        dynamicHeight={false}
        swipeable={true}
      >
        <div>
          <img src={Image} alt="First slide" />
        </div>
        <div>
          <img src={Image1} alt="Second slide" />
        </div>
        <div>
          <img src={Image2} alt="Third slide" />
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
