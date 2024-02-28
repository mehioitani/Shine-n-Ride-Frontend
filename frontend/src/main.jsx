import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { CartProvider } from "./context/cartContext.jsx";
import { AuthContext } from "./context/authContext.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  {/* // <React.Fragment> */}
    <Router>
      <ToastContainer />
      <AuthContext>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthContext>
    </Router>
    {/* </React.Fragment> */}
  </React.StrictMode>
);

