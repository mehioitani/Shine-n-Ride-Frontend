import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/clientSide/navbar/navbar.jsx";
import Footer from "./components/clientSide/footer/footer.jsx";
import HomePage from "./pages/clientSide/homePage.jsx";
import ContactUsPage from "./pages/clientSide/contactUsPage.jsx";
import SingleServicePage from "./pages/clientSide/singleServicePage.jsx";
import Sidebar from "./components/adminSide/sidebar/sidebar.jsx";
import CarouselsPage from "./pages/adminSide/CarouselsPage/carouselsPage.jsx";
import AdminLogin from "./pages/adminSide/login/login.jsx";
import { useAuthContext } from "./hooks/useAuthContext.jsx";
import AddToCart from "./pages/clientSide/AddToCard/AddToCart.jsx";
import Checkout from "./pages/clientSide/Checkout/Checkout.jsx";

// import Comment from "./components/comment.jsx";

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
        <Route path="/addToCart" element={<AddToCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>

      <Route path="/admin" element={admin ? <AdminLayout /> : <AdminLogin />}>
        <Route path="carousels" element={<CarouselsPage />} />
      </Route>
      {/* <Route path="comment" element={<Comment />}/> */}
    </Routes>
  );
}

export default App;
