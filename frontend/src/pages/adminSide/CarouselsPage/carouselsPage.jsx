import CarouselsCard from "../../../components/adminSide/carousels/carouselsCard/carouselsCard.jsx";
import { useState, useEffect } from "react";
import AddForm from "../../../components/adminSide/carousels/addForm/addForm.jsx";
import EditForm from "../../../components/adminSide/carousels/editForm/editForm.jsx";
import axios from "axios";
import "./carouselsPage.css";

const CarouselsPage = () => {
  const [carousels, setCarousels] = useState([]);
  const [refreshPage, setRefreshPage] = useState("");
  const [open, setOpen] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [singleCarousel, setSingleCarousel] = useState({});

  useEffect(() => {
    const fetchCarousels = async () => {
      const response = await axios.get(
        import.meta.env.VITE_API_ENDPOINT + `api/carousels`
      );
      setCarousels(response.data.data);
      console.log("carousel fetched:", response.data.data);
    };
    fetchCarousels();
  }, [refreshPage]);

  const refPage = (refresh) => {
    setRefreshPage(refreshPage + refresh);
  };

  const handleChangeObject = (obj) => {
    setSingleCarousel(obj);
    setOpenEditForm(true);
  };

  return (
    <>
      {open && <AddForm refresh={refPage} setIsOpen={setOpen} />}
      {openEditForm && (
        <EditForm
          setIsOpen={setOpenEditForm}
          refresh={refPage}
          singleCarousel={singleCarousel}
        />
      )}

      <div className="add-button-icon">
        <button className="add-button" type="button" onClick={() => setOpen(true)}>
          <span className="button__text">Add Item</span>
          <span className="button__icon">
            <svg
              className="svg"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" x2="12" y1="5" y2="19"></line>
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
          </span>
        </button>
      </div>
      <div className="carousel-admin-container">
        {carousels.map((each) => (
          <CarouselsCard
            key={each._id}
            carousel={each}
            handleChangeObject={handleChangeObject}
            refresh={refPage}
          />
        ))}
      </div>
    </>
  );
};

export default CarouselsPage;
