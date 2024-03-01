import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { CartProvider } from "./context/cartContext.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ToastContainer />
      <AuthContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
