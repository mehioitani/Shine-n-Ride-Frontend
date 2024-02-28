import "./App.css";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/clientSide/navbar/navbar.jsx";
import Footer from "./components/clientSide/footer/footer.jsx";
import HomePage from "./pages/clientSide/homePage.jsx";
import ContactUsPage from "./pages/clientSide/contactUsPage.jsx";
import SingleServicePage from "./pages/clientSide/singleServicePage.jsx";
import Sidebar from "./components/adminSide/sidebar/sidebar.jsx";
import CarouselsPage from "./pages/adminSide/CarouselsPage/carouselsPage.jsx";
import AdminLogin from "./pages/adminSide/login/login.jsx";
import { useAuthContext } from "./hooks/useAuthContext.jsx";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const AdminLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

function App() {
  const { admin } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/singleService/:title" element={<SingleServicePage />} />
      </Route>

      <Route path="/admin" element={admin ? <AdminLayout /> : <AdminLogin />}>
        <Route path="carousels" element={<CarouselsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
