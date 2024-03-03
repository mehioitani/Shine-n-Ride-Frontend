import { useState, useEffect } from "react";
import axios from "axios";
import "./editForm.css";
import { useAuthContext } from "../../../../hooks/useAuthContext.jsx";

const EditServiceForm = ({ refresh, setIsOpen, singleService }) => {
  const { admin } = useAuthContext();

  const [data, setData] = useState(singleService);

  useEffect(() => {
    setData(singleService);
  }, [singleService]);

  const handleEditService = async (e) => {
    e.preventDefault();
    try {
      const fData = new FormData();
      fData.append("service_title", data.service_title);
      fData.append("price_small", data.priceSmall);
      fData.append("priceMedium", data.priceMedium);
      fData.append("priceLarge", data.priceLarge);
      fData.append("service_image", data.service_image);
      fData.append("quantity", data.quantity);

      const response = await axios.put(
        import.meta.env.VITE_API_ENDPOINT + `api/services/${data._id}`,
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
      console.log(error);
    }
  };

  return (
    <div className="form-container-edit-service">
      <form onSubmit={handleEditService} className="form-edit-service">
        <div className="inputs-container-edit">
          <div className="input-label-container-service">
            <div className="input-label-container-service-edit">
              <label className="label-service-edit">
                Service Title
                <input
                  type="text"
                  value={data.service_title || ""}
                  onChange={(e) => {
                    setData({ ...data, service_title: e.target.value });
                  }}
                />
              </label>
            </div>
            <div className="input-label-container-service-edit">
              <label className="label-service-edit">
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
            <div className="input-label-container-service-edit">
              <label className="label-service-edit">
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
            <div className="input-label-container-service-edit">
              <label className="label-service-edit">
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
            <div className="input-label-container-service-edit">
              <label className="label-service-edit">
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

            <div className="input-label-container-service-edit">
              <img
                src={data.service_image}
                width={"700px"}
                height={"300px"}
                alt={data._id}
              />
              <label className="label-service-edit">
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
        </div>
        <div className="service-buttons-container">
          <div className="cancel-service-1">
            <button
              className="cancel-button-service"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
          <div className="edit-service-1">
            <button className="edit-button-service" type="submit">
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditServiceForm;
