import "./singleServiceComponent.css";
import { useCart } from "../../../hooks/useCart.jsx";
import { useParams } from "react-router-dom";
const handleSliderInput = (e) => {
  const draggerContainer = document.querySelector(".dragger-container");
  draggerContainer.style.setProperty("--position", `${e.target.value}%`);
};
const SingleServiceComponent = ({ services }) => {
  const params = useParams();
  // const firstService = services[0];
  const { addToCart } = useCart();

  const filteredServices = services.filter(
    (s) => s?.categoryId.category_title === params.title
  );
  return (
    <>
      {filteredServices && (
        <div key={filteredServices[0]?._id}>
          <div className="top-section-container">
            <div className="top-section-image">
              <img
                src={filteredServices[0]?.serviceDetails?.leftImage}
                className="img-1"
              />
            </div>
            <div className="top-section-text">
              <div className="text-1">
                <h4>{filteredServices[0]?.serviceDetails?.rightTitle}</h4>
                <h1>{filteredServices[0]?.serviceDetails?.rightSubtitle}</h1>
                <p>{filteredServices[0]?.serviceDetails?.rightText}</p>
              </div>
            </div>
          </div>

          <div className="bottom-section-container">
            <div className="bottom-section-text">
              <div className="text-2">
                <h4>{filteredServices[0]?.serviceDetails?.leftTitle}</h4>
                <h5>{filteredServices[0]?.serviceDetails?.leftSubtitle1}</h5>
                <p>{filteredServices[0]?.serviceDetails?.leftText1}</p>

                <h5>{filteredServices[0]?.serviceDetails?.leftSubtitle2}</h5>
                <p>{filteredServices[0]?.serviceDetails?.leftText2}</p>

                <h5>{filteredServices[0]?.serviceDetails?.leftSubtitle3}</h5>
                <p>{filteredServices[0]?.serviceDetails?.leftText3}</p>
              </div>
            </div>
            <div className="bottom-section-image">
              <div className="dragger-container">
                <div className="image-container">
                  <img
                    className="image-before slider-image"
                    src={filteredServices[0]?.serviceDetails?.beforeImage}
                    alt="color photo"
                  />
                  <img
                    className="image-after slider-image"
                    src={filteredServices[0]?.serviceDetails?.afterImage}
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleServiceComponent;
