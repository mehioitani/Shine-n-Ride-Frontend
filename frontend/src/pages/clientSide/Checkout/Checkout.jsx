import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../../hooks/useCart.jsx";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Checkout.css";

function Checkout() {
  const { cartServices, setCartServices, addToCart, removeFromCart,selectedPrice } =
    useCart();

  const services = cartServices?.map((service) => ({
    serviceId: service._id,
    quantity: service.quantity,
    price: service.selectedPrice,
  }));

  const totalAmount = services.reduce(
    (accumulator, service) => accumulator + service.quantity * service.selectedPrice,
    0
  );

  const [deliveryAddress, setDeliveryAddress] = useState({
    receiverName: "",
    city: "",
    street: "",
    building: "",
    phone: "",
    addressDetails: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleCreateOrder = async (e) => {
    e.preventDefault();
    console.log("checkout", deliveryAddress);
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_ENDPOINT + `api/orders/`,
        { services, deliveryAddress, totalAmount }
      );
      console.log(response.data);
      if (response.data.success) {
        setCartServices([]);
        toast.info(`Thank you for placing an order with Shine 'n' Ride.`, {
          position: "top-center",
          autoClose: 2000,
          theme: "light",
        });
      } else {
        alert("error", response.data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "Poppins",
        width: "100%",
      }}
    >
      <div className="checkout-wrapper">
        <div className="checkout-container">
          <form className="checkout-form" action="">
            <h1>
              <i className="checkout-title"></i>
              Shipping Details
            </h1>
            <div className="checkout-name">
              <div>
                <label htmlFor="f-name">Name</label>
                <input
                  type="text"
                  name="receiverName"
                  value={deliveryAddress.receiverName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="l-name">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={deliveryAddress.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="checkout-street">
              <label htmlFor="name">Street</label>
              <input
                type="text"
                name="street"
                value={deliveryAddress.street}
                onChange={handleInputChange}
              />
            </div>

            <div className="checkout-street">
              <label htmlFor="name">building</label>
              <input
                type="text"
                name="building"
                value={deliveryAddress.building}
                onChange={handleInputChange}
              />
            </div>
            <div className="checkout-address-info">
              <div>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  value={deliveryAddress.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="checkout-street">
                <label htmlFor="name">Address Details</label>
                <input
                  type="text"
                  name="addressDetails"
                  value={deliveryAddress.addressDetails}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="checkout-btns">
              <Link to="/checkout">
                {" "}
                <button
                  onClick={(e) => {
                    handleCreateOrder(e);
                  }}
                >
                  Complete Order
                </button>
              </Link>
              <Link to="/addToCart">
                <button>Back to cart</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
