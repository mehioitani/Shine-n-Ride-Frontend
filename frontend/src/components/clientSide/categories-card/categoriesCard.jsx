import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../../../components/loader/loader.jsx";
import axios from "axios";
import "./categoriesCard.css";

const ServicesCard = () => {
  const [categories, setCategories] = useState([]);
  const [refreshPage, setRefreshPage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          import.meta.env.VITE_API_ENDPOINT + "api/categories/"
        );
        setLoading(false);
        console.log(response.data);
        setCategories(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, [refreshPage]);

  const refPage = (refresh) => {
    setRefreshPage(refreshPage + refresh);
  };

  return (
    <div className="services-container-client" id="ourServices">
      <div className="services-card-title">
        <h1>Categories</h1>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="services-cards-container">
          {categories.map((category) => (
            <div className="services-card-client" key={category._id}>
              <Link to={`/singleService/${category.category_title}`}>
                <img src={category.category_image} alt="" />
              </Link>
              <div className="service-intro">
                <h1>{category.category_title}</h1>
                <p>{category.category_description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesCard;
