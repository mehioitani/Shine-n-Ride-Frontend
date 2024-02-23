import "./contactUs.css";
import axios from "axios";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const onSubmit = async (event) => {
    event.preventDefault();

    const object = {
      ...formData,
      access_key: "a660d486-31a5-43ee-8d81-b9bca58b1347",
    };
    const json = JSON.stringify(object);

    try {
      const res = await axios.post("https://api.web3forms.com/submit", json, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (res.data.success) {
        console.log("Success", res);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-left-side">
          <div className="address details">
            <i className="fas fa-map-marker-alt" />
            <div className="topic">Address</div>
            <div className="text-one">Surkhet, NP12</div>
            <div className="text-two">Birendranagar 06</div>
          </div>
          <div className="phone details">
            <i className="fas fa-phone-alt" />
            <div className="topic">Phone</div>
            <div className="text-one">+0098 9893 5647</div>
            <div className="text-two">+0096 3434 5678</div>
          </div>
          <div className="email details">
            <i className="fas fa-envelope" />
            <div className="topic">Email</div>
            <div className="text-one">shinenride@gmail.com</div>
            <div className="text-two">info.shinenride@gmail.com</div>
          </div>
        </div>
        <div className="contact-right-side">
          <div className="topic-text">Send us a message</div>
          <p>Any creative text.</p>
          <form onSubmit={onSubmit}>
            <div className="input-box">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="input-box message-box">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="contact-button">
              <input type="submit" defaultValue="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
