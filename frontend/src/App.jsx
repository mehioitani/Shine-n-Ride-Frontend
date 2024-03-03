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
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="orderDetails/:id" element={<OrderDetails />} />
      </Route>
      {/* <Route path="comment" element={<Comment />}/> */}
    </Routes>
  );
}

export default App;

{
  /*
 {
  totalAmount: {
    type: Number,
    // required: true,
    min: 0,
  },
  // paymentMethod: {
  //   type: String,
  //   required: true,
  //   enum: ["CreditCard", "CashOnDelivery"],
  //   default: "CashOnDelivery",
  // },
  isPaid: {
    type: Boolean,
    default: false,
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
  deliveryCharge: {
    type: Number,
    default: 0,
  },
  deliveryAddress: {
    receiverName: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    building: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    addressDetails: {
      type: String,
    },
  },
  services: {
    type: [
      {
        serviceId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Service",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
        },

      },
    ],
    */
}
