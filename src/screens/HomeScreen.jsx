import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { heroImage } from "../assets/image";
import { testimonials } from "../assets/testimonial";
import { destinationImage } from "../assets/image";
import { Link } from "react-router-dom";
import ctaImage from "../assets/image 3.jpg";
import { useState } from "react";
import ShuffleText from "react-shuffle-text";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const lalibela = destinationImage[0];
  const omoValley = destinationImage[5];
  const baleMountains = destinationImage[1];
  const harar = destinationImage[2];
  const navigate = useNavigate();

  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {heroImage.map((image) => (
          <SwiperSlide>
            <div className="hero_slide">
              <img src={image} alt="hero" className="hero_images" />{" "}
              <div className="overlay"></div>
            </div>
          </SwiperSlide>
        ))}
        <div className="hero_text">
          <h1 data-aos="fade-up" data-aos-duration="400">
            Discover the Untold Wonders of Ethiopia with Us
          </h1>
          <button
            className="hero_button"
            data-aos="fade-up"
            data-aos-duration="600"
            onClick={(e) => navigate("/tours")}
          >
            Explore Tours
          </button>
        </div>
      </Swiper>
      <div className="destination_section">
        <div className="destination_content">
          <h1>
            <ShuffleText content="Our Popular Destinations" />
          </h1>
          <p>The most popular destination presented to you</p>
          <div className="destination_list">
            <div className="col_1">
              <div className="row_1">
                <div
                  className="bale"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <img
                    src={baleMountains.imageUrl}
                    alt="destination"
                    className="destination_image"
                  />
                  <div className="destination_text">
                    <h2>{baleMountains.link}</h2>
                    <p>{baleMountains.description}</p>
                    <Link to={`/destination/${baleMountains.id}`}>
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row_2">
                <div
                  className="elm_1"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <img
                    src={lalibela.imageUrl}
                    alt="destination"
                    className="destination_image"
                  />
                  <div className="destination_text">
                    <h2>{lalibela.link}</h2>
                    <p>{lalibela.description}</p>
                    <Link to={`/destination/${lalibela.id}`}>Read more</Link>
                  </div>
                </div>
                <div
                  className="elm_1"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <img
                    src={harar.imageUrl}
                    alt="destination"
                    className="destination_image"
                  />
                  <div className="destination_text">
                    <h2>{harar.link}</h2>
                    <p>{harar.description}</p>
                    <Link to={`/destination/${harar.id}`}>Read more</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col_2">
              <div
                className="elm_2"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img
                  src={omoValley.imageUrl}
                  alt="destination"
                  className="destination_image"
                />
                <div className="destination_text">
                  <h2>{omoValley.link}</h2>
                  <p>{omoValley.description}</p>
                  <Link to={`destination/${omoValley.id}`}>Read more</Link>
                </div>
              </div>
            </div>
          </div>
          <button className="destination_button">Explore Tours</button>
        </div>
      </div>
      <div className="testimonial_section">
        <div className="testimonial_content">
          <h1>What our clients say about us</h1>
          <p>Testimonials</p>
          <div className="testimonial_list">
            {testimonials.map((testimonial) => (
              <div
                className="testimonial_card"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <p>"{testimonial.testimonial}"</p>
                <div className="testimonial_profile">
                  <img src={testimonial.profileImg} />
                  <div className="testimonial_info">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="cta_section">
        <div className="cta_content">
          <div className="cta_text">
            <h1>EXPERT GUIDES & UNFORGETTABLE ADVENTURES</h1>
            <button className="destination_button">Explore Tours</button>
          </div>
          <img src={ctaImage} height={300} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
