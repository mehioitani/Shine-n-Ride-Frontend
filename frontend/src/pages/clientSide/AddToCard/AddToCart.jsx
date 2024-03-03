import React from "react";
import { useCart } from "../../../hooks/useCart.jsx";
import { useState } from "react";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "./AddToCart.css";

export default function ServiceCards({service}) {
 
  
  const {
    cartServices,
    setCartServices,
    handleIncrement,
    handleDecrement,
    removeFromCart,
    selectedPrice,
    handleRadioChange
  } = useCart();

  console.log("cartServicesitems: ", cartServices);
  const buttonStyle = {
    display: "flex",
    backgroundColor: "#fad0e2e5",
    borderRadius: "10px",
    padding: "0.6% 4%",
    fontSize: "24px",
    width: "250px",
    height: "40px",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "Poppins",
    borderColor: "#b2b2b4",
    TextDecoder: "none",
  };
  // const titleStyle = {
  //   fontFamily: 'Poppins', // Apply Poppins font family
  // };
  const containerStyle = {
    padding: "20px", // Adjust the padding as needed
    border: "1px solid #b2b2b4",
    borderRadius: "10px",
    marginTop: "20px", // Adjust the margin-top as needed
  };
  return (
    <section
      className="add-to-cart-container h-100 w-75 mx-auto border"
      style={{ backgroundColor: "white" }}
    >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10">
            <div className="d-flex justify-content-between align-items-center mb-4 w-100 mx-0">
              <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                Shopping Cart
              </MDBTypography>
            </div>
            {cartServices?.map((service, index) => (
              <MDBCard key={index} className="rounded-3 mb-4 w-100">
                <MDBCardBody className="p-4">
                  <MDBRow className="justify-content-between align-items-center">
                    <MDBCol md="2" lg="2" xl="2">
                      <MDBCardImage
                        className="rounded-3"
                        fluid
                        src={service.service_image}
                        alt={`image_${service.service_title}`}
                      />
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3">
                      <p className="lead fw-normal mb-2">
                        {service.service_title}
                      </p>
                      {/* <p>
                        <span className="text-muted">Size: </span>
                        {service.size}{" "}
                        <span className="text-muted">Color: </span>
                        {service.color}
                      </p> */}
                      <div className="car-service-prices" style={{display:
                      'flex', justifyContent:'space-between'}}>
                        <input
                          type="radio"
                          id="Small"
                          name="Small"
                          value={service.priceSmall}
                          checked={selectedPrice === service.priceSmall}
                          onChange={handleRadioChange}
                        />
                        Small
                        <input
                          type="radio"
                          id="Medium"
                          name="Medium"
                          value={service.priceMedium}
                          checked={selectedPrice === service.priceMedium}
                          onChange={handleRadioChange}
                        />
                         <label htmlFor="Medium">Medium</label>  
                        <input
                          type="radio"
                          id="Large"
                          name="Large"
                          value={service.priceLarge}
                          checked={selectedPrice === service.priceLarge}
                          onChange={handleRadioChange}
                          
                        />
                        Large
                      </div>
                    </MDBCol>
                    <MDBCol
                      md="3"
                      lg="3"
                      xl="2"
                      className="d-flex align-items-center justify-content check-products-details"
                    >
                      <MDBCol md="3" lg="3" xl="3" className="offset-lg-1">
                        <MDBTypography
                          tag="h5"
                          className="mb-0 product-price-checkout"
                        >
                          {`${selectedPrice || 0}$`}
                        </MDBTypography>
                      </MDBCol>
                      <button
                        onClick={() => {
                          handleDecrement(service);
                        }}
                        className="buttonCartMinus"
                      >
                        <MDBIcon fas icon="minus" />
                      </button>
                      <MDBInput
                        className="cartplusminusinput"
                        min={0}
                        value={service.quantity}
                        type="text"
                        size="sm"
                        // onChange={(e) => {
                        //   const updatedProducts = [...cartProducts]; // Create a copy of the array

                        //   if (updatedProducts.length > 0) {
                        //     updatedProducts[index] = {
                        //       ...updatedProducts[index],
                        //       quantity: +e.target.value,
                        //     };

                        //     setCartProducts(updatedProducts);
                        //   }
                        // }}
                      />
                      <button
                        className="buttonCartPlus"
                        onClick={() => handleIncrement(service)}
                      >
                        <MDBIcon fas icon="plus" />
                      </button>
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                      <MDBTypography
                        tag="h5"
                        className="mb-0 product-price-checkout"
                      >
                        {`${selectedPrice * service.quantity || 0}$`}
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol
                      onClick={() => removeFromCart(index)}
                      md="1"
                      lg="1"
                      xl="1"
                      className="trashCartPage"
                    >
                      <MDBIcon fas icon="trash text-danger" size="lg" />
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            ))}
            <div className="d-flex justify-content-between m-2  align-items-center">
              <div className="d-flex flex-row align-items-baseline gap-4 justify-content-center">
                <Link to="/">
                  <button type="button" className="btn btn-dark">
                    Back to shop
                  </button>{" "}
                </Link>

                <Link to="/">
                  <button
                    onClick={() => {
                      setCartServices([]);
                    }}
                    type="button"
                    className="btn btn-dark"
                  >
                    Empty the cart
                  </button>{" "}
                </Link>
              </div>
              <div className="d-flex flex-row align-items-baseline justify-content-between w-25">
                <p className="text-center px-3">
                  {cartServices.reduce(
                    (accumulator, service) =>
                      accumulator + service.quantity * selectedPrice || 0,
                    0
                  )}
                </p>

                <Link to="/checkout">
                  <button type="button" className="btn btn-dark">
                    Checkout
                  </button>{" "}
                </Link>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
