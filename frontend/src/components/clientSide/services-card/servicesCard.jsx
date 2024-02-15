import Detail from "../../../assets/services/detail.jpg";
import Detail1 from "../../../assets/services/detail1.jpg";
import Detail2 from "../../../assets/services/detail2.jpg";
import "./servicesCard.css";

const ServicesCard = () => {
  return (
    <div className="services-container-client">
      <div className="services-card-client">
        <img src={Detail} alt="Detail" />
        <div className="service-intro">
          <h1>Polish</h1>
          <p>
            Lorem <span>ipsum </span>dolor sit amet consectetur adipisicing
            elit. Libero voluptatem ex voluptatum, deserunt fugit nulla,
            molestiae similique tempora ab aliquid dicta eaque veritatis, ea
            quae qui a! Ut, animi in!
          </p>
        </div>
      </div>
      <div className="services-card-client">
        <img src={Detail1} alt="Detail" />
        <div className="service-intro">
          <h1>Polish</h1>
          <p>
            Lorem <span>ipsum </span>dolor sit amet consectetur adipisicing
            elit. Libero voluptatem ex voluptatum, deserunt fugit nulla,
            molestiae similique tempora ab aliquid dicta eaque veritatis, ea
            quae qui a! Ut, animi in!
          </p>
        </div>
      </div>
      <div className="services-card-client">
        <img src={Detail2} alt="Detail" />
        <div className="service-intro">
          <h1>Polish</h1>
          <p>
            Lorem <span>ipsum </span>dolor sit amet consectetur adipisicing
            elit. Libero voluptatem ex voluptatum, deserunt fugit nulla,
            molestiae similique tempora ab aliquid dicta eaque veritatis, ea
            quae qui a! Ut, animi in!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
