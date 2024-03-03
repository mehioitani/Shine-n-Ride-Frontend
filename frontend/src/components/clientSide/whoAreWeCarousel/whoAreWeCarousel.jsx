import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import axios from "axios";

const MyCarousel = () => {
  const [carousels, setCarousels] = useState([]);

  useEffect(() => {
    const fetchCarousels = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_ENDPOINT + "api/carousels"
        );
        console.log(response.data);
        setCarousels(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCarousels();
  }, []);

  const carouselContainerStyle = {
    maxHeight: "90vh",
    overflow: "hidden",
    maxWidth: "1280px",
    margin: "15px auto 80px auto",
  };

  const carouselStyle = {
    height: "78vh",
  };
  const carouselImageStyle = {
    objectFit: "cover",
    height: "800px",
  };

  const carouselCaptionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "rgba(18,18,18,0.4)",
    borderRadius: "20px",
    fontSize: "30px",
    fontFamily: "Poppins,sans-serif",
    fontWeight: "500",
  };

  return (
    <div style={carouselContainerStyle} id="about">
      <div
        className="carousel-card-title"
        style={{
          marginBottom: "50px",
          fontWeight: "700",
          fontSize: "50px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontWeight: "700",
            fontSize: "50px",
          }}
        >
          Who Are We ?
        </h1>
      </div>
      <Carousel style={carouselStyle}>
        {carousels.map((carousel) => (
          <Carousel.Item key={carousel._id}>
            <img
              className="d-block w-100"
              src={carousel.carousel_image}
              alt="First slide"
              style={carouselImageStyle}
            />
            <Carousel.Caption style={carouselCaptionStyle}>
              <h3>{carousel.carousel_title}</h3>
              <p>{carousel.carousel_subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;

{
  /* <Carousel
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
className="Carousel"
>
<div>
  <img src={Image} alt="First slide" />
  <div className="overlay-carousel"></div>
  <div className="carousel-text">
    <h2>Title for First Slide</h2>
    <p>Text for First Slide</p>
  </div>
</div>
<div>
  <img src={Image1} alt="Second slide" />
  <div className="overlay-carousel"></div>
  <div className="carousel-text">
    <h2>Title for Second Slide</h2>
    <p>Text for Second Slide</p>   
  </div>
</div>
<div>
  <img src={Image2} alt="Third slide" />
  <div className="overlay-carousel"></div>
  <div className="carousel-text">
    <h2>Title for Third Slide</h2>
    <p>Text for Third Slide</p>
  </div>
</div>
</Carousel> */
}
