import React from "react";
import "./video.css";

const Video = () => {
  return (
    <>
      <section className="showcase">
        <video
          src="https://res.cloudinary.com/dpocnh6zk/video/upload/v1709487232/Shine-n-Ride/bwaic9dsna329tt7sdzv.mp4"
          muted
          loop
          autoPlay
        ></video>
        <div className="overlay-video"></div>
        <div className="text">
          <h2>Your Car Deserves </h2>
          <h3>The Best Detailing Experience</h3>
          <p>
            At Shine 'n' Ride, we go beyond the ordinary to bring your vehicle
            back to life. Our team of skilled professionals is dedicated to
            providing top-notch car wash and detailing services tailored to your
            car's unique needs.
          </p>
        </div>
      </section>
    </>
  );
};

export default Video;
