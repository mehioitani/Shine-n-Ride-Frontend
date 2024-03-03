import LandingVideo from "../../components/clientSide/landingVideo/video.jsx";
import Categories from "../../components/clientSide/categories-card/categoriesCard.jsx";
import AboutUsCarousel from "../../components/clientSide/whoAreWeCarousel/whoAreWeCarousel.jsx";
import Appointment from "../../components/clientSide/appointmentWidget/appointment.jsx";
import AllReviews from "../../components/clientSide/allReviews/allReviews.jsx";

const HomePage = () => {
  return (
    <>
      <LandingVideo/>
      <Categories />
      <AboutUsCarousel />
      <Appointment />
      <AllReviews />
    </>
  );
};

export default HomePage;
