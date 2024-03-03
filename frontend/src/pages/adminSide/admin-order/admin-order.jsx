import React, { useState, useEffect } from "react";
import "./admin-order.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const AdminOrder = () => {
  const params = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    const fetchSingleOrderById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/orders/${params.id}`
        );
        setOrder(response.data.data);
        console.log("single", response.data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchSingleOrderById();
  }, []);

  return (
    <div className="order-details">
      <h2 className="order-details__title">Order Details</h2>
      <div className="order-details__receiver-info">
        <div className="infoOrderReceiverDetails">
          {" "}
          <p>
            <strong>Receiver Name:</strong>{" "}
            {order.deliveryAddress?.receiverName}
          </p>
          <p>
            <strong>Phone:</strong> {order.deliveryAddress?.phone}
          </p>
        </div>
        <div className="infoOrderReceiverDetails">
          <p>
            <strong>City:</strong> {order.deliveryAddress?.city}{" "}
          </p>
          <p>
            <strong>Street:</strong> {order.deliveryAddress?.street}
          </p>
          <p>
            <strong>Building:</strong> {order.deliveryAddress?.building}
          </p>
        </div>
        <div className="infoOrderReceiverDetails">
          <p>
            <strong>Address Details / Notes:</strong>{" "}
            {order.deliveryAddress?.addressDetails}
          </p>
        </div>
      </div>
      <br />
      <div className="order-details__products">
        <div className="order-details__products__Headings">
          <h3>Products</h3>
          <span>
            {" "}
            <h3>Price</h3>
            <h3>Qty</h3>
            <h3>Color</h3>
            <h3>Fabric</h3>
          </span>
        </div>
        <hr />

        <ul>
          {order.services?.map((service, index) => (
            <div className="order-details-products">
              <span className="product-name">
                {service.serviceId?.service_title}
              </span>

              <li key={index}>
                <span className="product-image">
                  <img
                    width={200}
                    src={
                      import.meta.env.VITE_API_ENDPOINT +
                      service?.serviceId?.service_image
                    }
                    alt=""
                  />
                </span>

                <span className="product-price">${service?.price}</span>
                <span className="service-quantity">{service?.quantity}</span>
           
              </li>
              <hr />
              <br />
            </div>
          ))}
        </ul>
        <p className="order-details__total-price">
          <strong>Total Price:</strong> ${order.totalAmount}
        </p>
      </div>
    </div>
  );
};
export default AdminOrder;
