import ServiceVideo from "../../components/clientSide/serviceVideo/serviceVideo.jsx";
import BookingServices from "../../components/clientSide/bookingServices/bookingServices.jsx";
import SingleServiceComponent from "../../components/clientSide/singleService/singleServiceComponent.jsx";
import Reviews from "../../components/clientSide/reviews/reviews.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleServicePage = () => {
  const [services, setServices] = useState([]);
  const [refreshPage, setRefreshPage] = useState("");
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_ENDPOINT + `api/services`
        );

        console.log("services response.data", response.data);
        setServices(response.data.data);
        console.log("services response.data.data", response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchServices();
  }, [refreshPage]);
  return (
    <div>
      <ServiceVideo services={services} />
      <BookingServices services={services} />
      <SingleServiceComponent services={services} />
      <Reviews />
    </div>
  );
};

export default SingleServicePage;
