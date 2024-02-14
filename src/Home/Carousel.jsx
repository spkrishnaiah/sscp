import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Image from "./Image";
import S1 from "./Pictures/S1.jpg";
import S2 from "./Pictures/S2.jpg";
import S3 from "./Pictures/S3.jpg";
import S4 from "./Pictures/S4.jpg";
import S5 from "./Pictures/S5.jpg";
import S6 from "./Pictures/S6.jpg";
import S7 from "./Pictures/S7.jpg";
import S8 from "./Pictures/S8.jpg";

const CarouselComponent = () => {
  return (
    <div className="home">
      <Carousel interval={1000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={S1} // Replace with your image URL
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-50 w-100"
            src={S2} // Replace with your image URL
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={S3} // Replace with your image URL
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={S4} // Replace with your image URL
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={S5} // Replace with your image URL
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={S6} // Replace with your image URL
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={S7} // Replace with your image URL
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={S8} // Replace with your image URL
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
