import "./addForm.css";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../../../hooks/useAuthContext.jsx";

const ServiceAddForm = ({ refresh, setIsOpen }) => {
  const { admin } = useAuthContext();
  const [data, setData] = useState({
    service_title: null,
    priceSmall: " ",
    priceMedium: " ",
    priceLarge: " ",
    service_image: null,
    quantity: null,
  });

  const handleAddService = async (e) => {
    e.preventDefault();

    try {
      const fData = new FormData();
      fData.append("service_title", data.service_title);
      fData.append("priceSmall", data.priceSmall);
      fData.append("priceMedium", data.priceMedium);
      fData.append("priceLarge", data.priceLarge);
      fData.append("service_image", data.service_image);
      fData.append("quantity", data.quantity);

      const response = await axios.post(
        import.meta.env.VITE_API_ENDPOINT + "api/services",
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
    <div className="form-container-service">
      <form onSubmit={handleAddService} className="form-submit-service">
        <div className="inputs-container">
          <div className="input-label-container-service">
            <label className="label-service">
              service Title
              <input
                type="text"
                value={data.service_title || ""}
                onChange={(e) => {
                  setData({ ...data, service_title: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-service">
            <label className="label-service">
              Service Price Small
              <input
                type="text"
                value={data.priceSmall || ""}
                onChange={(e) => {
                  setData({ ...data, priceSmall: e.target.value });
                }}
              />
            </label>
          </div>

          <div className="input-label-container-service">
            <label className="label-service">
              Service Price Medium
              <input
                type="text"
                value={data.priceMedium || ""}
                onChange={(e) => {
                  setData({ ...data, priceMedium: e.target.value });
                }}
              />
            </label>
          </div>

          <div className="input-label-container-service">
            <label className="label-service">
              Service Price Small
              <input
                type="text"
                value={data.priceSmall || ""}
                onChange={(e) => {
                  setData({ ...data, priceSmall: e.target.value });
                }}
              />
            </label>
          </div>

          <div className="input-label-container-service">
            <label className="label-service">
              Service Price Large
              <input
                type="text"
                value={data.priceLarge || ""}
                onChange={(e) => {
                  setData({ ...data, priceLarge: e.target.value });
                }}
              />
            </label>
          </div>

          <div className="input-label-container-service">
            <label className="label-service">
              Service Quantity
              <input
                type="text"
                value={data.quantity || ""}
                onChange={(e) => {
                  setData({ ...data, quantity: e.target.value });
                }}
              />
            </label>
          </div>

          <div className="input-label-container-service">
            <label className="label-service">
              service Image
              <input
                type="file"
                onChange={(e) => {
                  setData({ ...data, service_image: e.target.files[0] });
                }}
              />
              <div className="custom-file-input">Choose File</div>
              <div className="selected-file-name">
                {data.service_image
                  ? data.service_image.name
                  : "No file chosen"}
              </div>
            </label>
          </div>
        </div>
        <div className="service-buttons-container">
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

export default ServiceAddForm;
