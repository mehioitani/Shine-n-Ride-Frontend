import ReviewsCard from "../../../components/adminSide/reviews/reviewsCard/reviewsCard.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import "./reviewsPage.css";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [refreshPage, setRefreshPage] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios.get(
        import.meta.env.VITE_API_ENDPOINT + `api/reviews`
      );
      setReviews(response.data.data);
      console.log("review fetched:", response.data.data);
    };
    fetchReviews();
  }, [refreshPage]);

  const refPage = (refresh) => {
    setRefreshPage(refreshPage + refresh);
  };

  return (
    <>
      <div className="review-admin-container">
        {reviews.map((each) => (
          <ReviewsCard key={each._id} review={each} refresh={refPage} />
        ))}
      </div>
    </>
  );
};

export default ReviewsPage;
