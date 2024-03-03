import "./addForm.css";
import { useState } from "react";
import axios from "axios";

const CategoryAddForm = ({ refresh, setIsOpen }) => {
  const [data, setData] = useState({
    category_image: null,
    category_title: " ",
    category_description: " ",
  });

  const handleAddCategory = async (e) => {
    e.preventDefault();

    try {
      const fData = new FormData();
      fData.append("category_image", data.category_image);
      fData.append("category_title", data.category_title);
      fData.append("category_description", data.category_description);

      const response = await axios.post(
        import.meta.env.VITE_API_ENDPOINT + "api/categories",
        fData
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
    <div className="form-container-category">
      <form onSubmit={handleAddCategory} className="form-submit-category">
        <div className="inputs-container">
          <div className="input-label-container-category">
            <label className="label-category">
              Category Title
              <input
                type="text"
                value={data.category_title || ""}
                onChange={(e) => {
                  setData({ ...data, category_title: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-category">
            <label className="label-category">
              Category description
              <input
                type="text"
                value={data.category_description || ""}
                onChange={(e) => {
                  setData({ ...data, category_description: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-category">
            <label className="label-category">
              Category Image
              <input
                type="file"
                onChange={(e) => {
                  setData({ ...data, category_image: e.target.files[0] });
                }}
              />
              <div className="custom-file-input">Choose File</div>
              <div className="selected-file-name">
                {data.category_image
                  ? data.category_image.name
                  : "No file chosen"}
              </div>
            </label>
          </div>
        </div>
        <div className="category-buttons-container">
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

export default CategoryAddForm;
