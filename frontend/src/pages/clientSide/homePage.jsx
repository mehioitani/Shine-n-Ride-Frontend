import LandingVideo from "../../components/clientSide/landingVideo/video.jsx";
import Services from "../../components/clientSide/services-card/servicesCard.jsx";
import AboutUsCarousel from "../../components/clientSide/whoAreWeCarousel/whoAreWeCarousel.jsx";
import Appointment from "../../components/clientSide/appointmentWidget/appointment.jsx";
import AllReviews from "../../components/clientSide/reviews/reviews.jsx";

const HomePage = () => {
  return (
    <>
      <LandingVideo />
      <Services />
      <AboutUsCarousel />
      <Appointment />
      <AllReviews />
    </>
  );
};

export default HomePage;
