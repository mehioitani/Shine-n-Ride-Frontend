import "./App.css";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/clientSide/navbar/navbar.jsx";
import Footer from "./components/clientSide/footer/footer.jsx";
import HomePage from "./pages/clientSide/homePage.jsx";
import ContactUsPage from "./pages/clientSide/contactUsPage.jsx";
import BookingServices from "./components/clientSide/bookingServices/bookingServices.jsx";

// const Layout = () => {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// };

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route path="/" element={<HomePage />} />

    //     <Route path="/contactus" element={<ContactUsPage />} />
    //   </Route>
    // </Routes>
    <BookingServices/>
  );
}

export default App;
