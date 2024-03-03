import "./addForm.css";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../../../hooks/useAuthContext.jsx";

const CarouselAddForm = ({ refresh, setIsOpen }) => {
  const { admin } = useAuthContext();
  const [data, setData] = useState({
    carousel_image: null,
    carousel_title: " ",
    carousel_subtitle: " ",
  });

  const handleAddCarousel = async (e) => {
    e.preventDefault();

    try {
      const fData = new FormData();
      fData.append("carousel_image", data.carousel_image);
      fData.append("carousel_title", data.carousel_title);
      fData.append("carousel_subtitle", data.carousel_subtitle);

      const response = await axios.post(
        import.meta.env.VITE_API_ENDPOINT + "api/carousels",
        fData,
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        }
      );
      console.log(response);
      refresh("a");
      setIsOpen(false);
    } catch (error) {
      // Check if the response status is 400
      if (error.response && error.response.status === 400) {
        // Display the error message to the user
        alert(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="form-container-carousel">
      <form onSubmit={handleAddCarousel} className="form-submit-carousel">
        <div className="inputs-container">
          <div className="input-label-container-carousel">
            <label className="label-carousel">
              Carousel Title
              <input
                type="text"
                value={data.carousel_title || ""}
                onChange={(e) => {
                  setData({ ...data, carousel_title: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-carousel">
            <label className="label-carousel">
              Carousel Subtitle
              <input
                type="text"
                value={data.carousel_subtitle || ""}
                onChange={(e) => {
                  setData({ ...data, carousel_subtitle: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-carousel">
            <label className="label-carousel">
              Carousel Image
              <input
                type="file"
                onChange={(e) => {
                  setData({ ...data, carousel_image: e.target.files[0] });
                }}
              />
              <div className="custom-file-input">Choose File</div>
              <div className="selected-file-name">
                {data.carousel_image
                  ? data.carousel_image.name
                  : "No file chosen"}
              </div>
            </label>
          </div>
        </div>
        <div className="carousel-buttons-container">
          <div className="cancel-carousel-1">
            <button
              className="cancel-button-carousel"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
          <div className="add-carousel-1">
            <button className="add-button-carousel" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarouselAddForm;
