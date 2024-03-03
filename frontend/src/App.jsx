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
import CategoriesPage from "./pages/adminSide/CategoriesPage/categoriesPage.jsx";
import ReviewsPage from "./pages/adminSide/ReviewsPage/reviewsPage.jsx";
import OrdersPage from "./components/adminSide/order-form/order-form.jsx";
import OrderDetails from "./pages/adminSide/admin-order/admin-order.jsx";
import ServicesPage from "./pages/adminSide/servicesPage/servicesPage.jsx";

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
        <Route
          path="carousels"
          element={admin ? <CarouselsPage /> : <AdminLogin />}
        />
        <Route
          path="categories"
          element={admin ? <CategoriesPage /> : <AdminLogin />}
        />
        <Route
          path="reviews"
          element={admin ? <ReviewsPage /> : <AdminLogin />}
        />
        <Route
          path="services"
          element={admin ? <ServicesPage /> : <AdminLogin />}
        />
        <Route
          path="orders"
          element={admin ? <OrdersPage /> : <AdminLogin />}
        />
        <Route
          path="orderDetails/:id"
          element={admin ? <OrderDetails /> : <AdminLogin />}
        />
      </Route>
    </Routes>
  );
}

export default App;
