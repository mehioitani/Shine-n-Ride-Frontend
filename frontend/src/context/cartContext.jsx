import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./cart.css";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedPrice, setSelectedPrice] = useState();
  const handleRadioChange = (event) => {
    setSelectedPrice(event.target.value);
  };
  const [cartServices, setCartServices] = useState(() => {
    const storedCartServices =
      JSON.parse(localStorage.getItem("cartServices")) || [];
    return storedCartServices;
  });
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    const fetchAllServices = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_ENDPOINT + `api/services`
        );
        setAllServices(response.data.data);
        // console.log('response cart :', response.data.data);
        // console.log('response cart 2 ::',allServices)
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllServices();
  }, []);

  useEffect(() => {
    localStorage.setItem("cartServices", JSON.stringify(cartServices));
  }, [cartServices]);

  const addToCart = (service) => {
    console.log("service OBJECT:", service);
    const existingService = cartServices.find((s) => s._id === service?._id);
    console.log("service ID:", service?._id);

    if (existingService) {
      if (existingService.quantity < existingService.maxQuantity) {
        setCartServices((prevCartServices) =>
          prevCartServices.map((s) =>
            s._id === service._id ? { ...s, quantity: s.quantity + 1 } : s
          )
        );
        toast.success(`Service ${service.service_title} added to Cart`, {
          icon: (
            <img
              src="https://res.cloudinary.com/dpocnh6zk/image/upload/v1709487394/Shine-n-Ride/blackTick_c25yg3.png"
              width={22}
              alt="abv"
            />
          ),
          progressStyle: {
            background: "rgb(18,18,18)",
          },
          position: "top-center",
          autoClose: 2000,
          closeButton: false,
          draggable: true,
          pauseOnHover: false,
        });
      } else {
        toast.error(
          `Service ${service.service_title} available quantity reached ${service.maxQuantity} the maximum `,
          {
            position: "top-center",
            autoClose: 2000,
            theme: "light",
          }
        );
      }
    } else {
      if (service?.maxQuantity > 0) {
        setCartServices((prevCartServices) => [
          ...prevCartServices,
          { ...service, quantity: 1 },
        ]);
        toast.success(`Service ${service.service_title} added to Cart`, {
          icon: (
            <img
              src="https://res.cloudinary.com/dpocnh6zk/image/upload/v1709487394/Shine-n-Ride/blackTick_c25yg3.png"
              width={22}
              alt="abv"
            />
          ),
          progressStyle: {
            background: "#FCE5EF",
          },
          position: "top-center",
          autoClose: 2000,
          closeButton: false,
          draggable: true,
          pauseOnHover: false,
        });
      } else {
        toast.error(
          `Service ${service.service_title} available quantity reached ${service.maxQuantity} the maximum `,
          {
            position: "top-center",
            autoClose: 2000,
            closeButton: false,
            draggable: true,
            pauseOnHover: false,
          }
        );
      }
    }
  };

  const removeFromCart = (index) => {
    const confirmationComponent = (
      <div className="reactToastifyConfirmationBody">
        <div className="toastPandImage">
          <img
            className=""
            src="https://res.cloudinary.com/dpocnh6zk/image/upload/v1709487394/Shine-n-Ride/exclamation_wqiyge.png"
            alt=""
          />
          <p>Are you sure you want to remove this service from the cart? </p>
        </div>
        <div className="reactToastifyConfirmationButtons">
          <button
            onClick={() => {
              setCartServices((prevCartServices) =>
                prevCartServices.filter((_, i) => i !== index)
              );
              toast.dismiss();
            }}
          >
            Yes
          </button>
          <button onClick={() => toast.dismiss()}>Cancel</button>
        </div>
      </div>
    );

    toast(confirmationComponent, {
      progressStyle: {
        background: "rgb(18,18,18)",
      },
      position: "top-center",
      autoClose: 3000,
      closeButton: false,
      draggable: true,
      pauseOnHover: false,
    });
  };

  const handleIncrement = (cartService) => {
    if (cartService.quantity < cartService.maxQuantity) {
      setCartServices((prevCartServices) =>
        prevCartServices.map((service) =>
          service._id === cartService._id
            ? { ...service, quantity: service.quantity + 1 }
            : service
        )
      );
    } else {
      toast.error(
        `Service ${cartService.service_title} available quantity reached ${cartService.maxQuantity} the maximum `,
        {
          position: "top-center",
          autoClose: 2000,
          theme: "light",
        }
      );
    }
  };

  const handleDecrement = (cartService) => {
    if (cartService.quantity > 1) {
      setCartServices((prevCartServices) =>
        prevCartServices.map((service) =>
          service._id === cartService._id
            ? { ...service, quantity: service.quantity - 1 }
            : service
        )
      );
    } else {
      toast.error(`Cannot decrease ${cartService.service_title} quantity`, {
        position: "top-center",
        autoClose: 2000,
        theme: "light",
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartServices,
        setCartServices,
        addToCart,
        removeFromCart,
        handleIncrement,
        handleDecrement,
        selectedPrice,
        handleRadioChange,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
