import "./serviceVideo.css";
import { useParams } from "react-router-dom";

const ServiceVideo = ({ services }) => {
  const params = useParams();
  // const firstVideo = services[0];
  const filteredServices = services.filter(
    (s) => s?.categoryId.category_title === params.title
  );
  return (
    <>
      {filteredServices && (
        <section className="showcase" key={filteredServices[0]?._id}>
          <video
            src={filteredServices[0]?.service_video}
            muted
            loop
            autoPlay
          ></video>
          <div className="overlay-video"></div>
          <div className="text">
            <h2>Your Car Deserves </h2>
            <h3>The Best Detailing Experience</h3>
            <p>
              At Shine 'n' Ride, we go beyond the ordinary to bring your vehicle
              back to life. Our team of skilled professionals is dedicated to
              providing top-notch car wash and detailing services tailored to
              your car's unique needs.
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default ServiceVideo;
