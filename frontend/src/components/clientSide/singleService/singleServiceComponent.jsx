import "./singleServiceComponent.css";
import Detail1 from "../../../assets/services/detail1.jpg";
import Before from "../../../assets/beforeAfter/before.png";
import After from "../../../assets/beforeAfter/after.png";
import { useCart } from "../../../hooks/useCart.jsx";
const handleSliderInput = (e) => {
  const draggerContainer = document.querySelector(".dragger-container");
  draggerContainer.style.setProperty("--position", `${e.target.value}%`);
};
const SingleServiceComponent = () => {
  const { addToCart } = useCart();
  return (
    <>
      <div className="top-section-container">
        <div className="top-section-image">
          <img src={Detail1} className="img-1" />
        </div>
        <div className="top-section-text">
          <div className="text-1">
            <h4>LUXURY CARE</h4>
            <h1>Professional Detailing Services</h1>
            <p>
              Protect and enhance the finish of your brand new car or fully
              restore your car to its former beauty with our luxury detailing.
            </p>
            <p>
              <span>
                Your vehicle will be completely pampered inside and out.
              </span>
              The exterior including all boor and boot jams are rinsed and soap
              washed. Your paintwork is clay bar treated and finished with a
              polish glaze.
            </p>
            <p>
              The interior is wiped down, shampooed, steam cleaned and
              conditioned.
            </p>
            <p>
              You can choose an interior detail or full detail. We can also
              advise on paint correction if it’s required.
            </p>
          </div>
        </div>
      </div>

      <div className="bottom-section-container">
        <div className="bottom-section-text">
          <div className="text-2">
            <h4>Key Benefits Of Detailing</h4>
            <h5>ENHANCED APPEARANCE</h5>
            <p>
              Detailing can help restore the original look of your vehicle by
              removing dirt, grime, and other contaiminants that can accumulate
              over time. This can make your car look shiny and new, enhancing
              its overall appearance.
            </p>

            <h5>PROTECTION</h5>
            <p>
              Detailing can also help protect your car’s exterior from damage
              caused by exposure to the elements, such as UV rays, acid rain,
              and salt. Applying protective coatings and sealants can help
              prevent rust, fading, and other forms of deterioration.
            </p>

            <h5>INCREASED RESALE VALUE</h5>
            <p>
              Regular detailing can help maintain the value of your vehicle over
              time. A well-maintained car is likely to fetch a higher reale
              price than one that has been neglected, making detailing a smart
              investment for car owners who plan to sell their vehicle in the
              future.
            </p>
          </div>
        </div>
        <div className="bottom-section-image">
          <div className="dragger-container">
            <div className="image-container">
              <img
                className="image-before slider-image"
                src={Before}
                alt="color photo"
              />
              <img
                className="image-after slider-image"
                src={After}
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
    </>
  );
};

export default SingleServiceComponent;
