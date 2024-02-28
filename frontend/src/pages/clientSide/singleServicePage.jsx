import Video from "../../components/clientSide/landingVideo/video.jsx";
import BookingServices from "../../components/clientSide/bookingServices/bookingServices.jsx";
import SingleServiceComponent from "../../components/clientSide/singleService/singleServiceComponent.jsx";
import Reviews from '../../components/clientSide/reviews/reviews.jsx'

const SingleServicePage = () => {
  return (
    <div>
      <Video />
      <BookingServices />
      <SingleServiceComponent />
      <Reviews/>
    </div>
  );
};

export default SingleServicePage;
