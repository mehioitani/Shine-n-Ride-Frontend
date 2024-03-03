import ServiceVideo from "../../components/clientSide/serviceVideo/serviceVideo.jsx";
import BookingServices from "../../components/clientSide/bookingServices/bookingServices.jsx";
import SingleServiceComponent from "../../components/clientSide/singleService/singleServiceComponent.jsx";
import Reviews from "../../components/clientSide/reviews/reviews.jsx";
import Loader from "../../components/loader/loader.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleServicePage = () => {
  const [services, setServices] = useState([]);
  const [refreshPage, setRefreshPage] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          import.meta.env.VITE_API_ENDPOINT + `api/services`
        );
        console.log("services response.data", response.data);
        setServices(response.data.data);
        console.log("services response.data.data", response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchServices();
  }, [refreshPage]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ServiceVideo services={services} />
          <BookingServices services={services} />
          <SingleServiceComponent services={services} />
          <Reviews />
        </>
      )}
    </div>
  );
};

export default SingleServicePage;
