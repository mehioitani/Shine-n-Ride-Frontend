import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "../../../assets/services/detail.jpg";
import Image1 from "../../../assets/services/detail1.jpg";
import Image2 from "../../../assets/services/detail2.jpg";

const MyCarousel = () => {
  const carouselContainerStyle = {
    maxHeight: "90vh",
    overflow: "hidden",
    maxWidth: "1280px",
    margin: "15px auto 80px auto",
  };
  const carouselImageStyle = {
    objectFit: "cover",
  };

  const carouselCaptionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  };

  return (
    <div style={carouselContainerStyle}>
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
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image}
            alt="First slide"
            style={carouselImageStyle}
          />
          <Carousel.Caption style={carouselCaptionStyle}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image1}
            alt="Second slide"
            style={carouselImageStyle}
          />
          <Carousel.Caption style={carouselCaptionStyle}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image2}
            alt="Third slide"
            style={carouselImageStyle}
          />
          <Carousel.Caption style={carouselCaptionStyle}>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
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
