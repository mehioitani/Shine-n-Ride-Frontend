import Video from "../../components/clientSide/landingVideo/video.jsx";
import BookingServices from "../../components/clientSide/bookingServices/bookingServices.jsx";
import ServicesSections from "../../components/clientSide/servicesSections/servicesSections.jsx";
import SSS from '../../components/clientSide/servicesSectionpt2/sss.jsx'

const SingleServicePage = () => {
  return (
    <div>
      <Video />
      <BookingServices />
      {/* <ServicesSections /> */}
      <SSS/>
    </div>
  );
};

export default SingleServicePage;
