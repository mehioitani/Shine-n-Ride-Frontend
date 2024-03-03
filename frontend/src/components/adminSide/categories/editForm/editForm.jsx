import { useState, useEffect } from "react";
import axios from "axios";
import "./editForm.css";
import { useAuthContext } from "../../../../hooks/useAuthContext.jsx";

const EditCategoryForm = ({ refresh, setIsOpen, singleCategory }) => {
  const { admin } = useAuthContext();

  const [data, setData] = useState(singleCategory);

  useEffect(() => {
    setData(singleCategory);
  }, [singleCategory]);

  const handleEditCategory = async (e) => {
    e.preventDefault();
    try {
      const fData = new FormData();
      fData.append("category_image", data.category_image);
      fData.append("category_title", data.category_title);
      fData.append("category_description", data.category_description);

      const response = await axios.put(
        import.meta.env.VITE_API_ENDPOINT + `api/categories/${data._id}`,
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
    <div className="form-container-edit-category">
      <form onSubmit={handleEditCategory} className="form-edit-category">
        <div className="inputs-container-edit">
          <div className="input-label-container-category">
            <div className="input-label-container-category-edit">
              <label className="label-category-edit">
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
            <div className="input-label-container-category-edit">
              <label className="label-category-edit">
                Category Description
                <textarea
                  cols="30"
                  rows="5"
                  value={data.category_description || ""}
                  onChange={(e) => {
                    setData({ ...data, category_description: e.target.value });
                  }}
                ></textarea>
              </label>
            </div>
            <div className="input-label-container-category-edit">
              <img
                src={data.category_image}
                width={"700px"}
                height={"300px"}
                alt={data._id}
              />
              <label className="label-category-edit">
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
        </div>
        <div className="category-buttons-container">
          <div className="cancel-category-1">
            <button
              className="cancel-button-category"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
          <div className="edit-category-1">
            <button className="edit-button-category" type="submit">
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditCategoryForm;
