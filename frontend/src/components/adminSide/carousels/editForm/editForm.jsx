import { useState, useEffect } from "react";
import axios from "axios";
import "./editForm.css";

const EditCarouselForm = ({ refresh, setIsOpen, singleCarousel }) => {
  const [data, setData] = useState(singleCarousel);

  useEffect(() => {
    setData(singleCarousel);
  }, [singleCarousel]);

  const handleEditCarousel = async (e) => {
    e.preventDefault();
    try {
      const fData = new FormData();
      fData.append("carousel_image", data.carousel_image);
      fData.append("carousel_title", data.carousel_title);
      fData.append("carousel_subtitle", data.carousel_subtitle);

      const response = await axios.put(
        import.meta.env.VITE_API_ENDPOINT + `api/carousels/${data._id}`,
        fData
      );
      console.log(response);
      refresh("a");
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container-edit-carousel">
      <form onSubmit={handleEditCarousel} className="form-edit-carousel">
        <div className="inputs-container-edit">
          <div className="input-label-container-carousel">
            <div className="input-label-container-carousel-edit">
              <label className="label-carousel-edit">
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
            <div className="input-label-container-carousel-edit">
              <label className="label-carousel-edit">
                Carousel Subtitle
                <textarea  cols="30" rows="5"value={data.carousel_subtitle || ""}
                  onChange={(e) => {
                    setData({ ...data, carousel_subtitle: e.target.value });
                  }}></textarea>
                
              </label>
            </div>
            <div className="input-label-container-carousel-edit">
              <img
                src={data.carousel_image}
                width={"700px"}
                height={"300px"}
                alt={data._id}
              />
              <label className="label-carousel-edit">
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
          <div className="edit-carousel-1">
            <button className="edit-button-carousel" type="submit">
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditCarouselForm;
