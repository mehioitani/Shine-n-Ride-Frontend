import Detail from "../../../assets/services/detail.jpg";
import Detail1 from "../../../assets/services/detail1.jpg";
import Detail2 from "../../../assets/services/detail2.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./categoriesCard.css";

const ServicesCard = () => {
  const [categories, setCategories] = useState([]);
  const [refreshPage, setRefreshPage] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_ENDPOINT + "api/categories/"
        );
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
    <div className="services-container-client">
      <div className="services-card-title">
        <h1>Our Services</h1>
      </div>
      
        <div className="services-cards-container">
        {categories.map((category) => (
          <div className="services-card-client" key={category._id}>
            <Link to={`/singleService/${category.category_title}`}>
              <img
                src={category.category_image}
                alt=""
              />
            </Link>
            <div className="service-intro">
              <h1>{category.category_title}</h1>
              <p>{category.category_description}</p>
            </div>
          </div>
           ))}
        </div>
     
    </div>
  );
};

export default ServicesCard;
