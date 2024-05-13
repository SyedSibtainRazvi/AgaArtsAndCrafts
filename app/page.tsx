"use client";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Testimonial } from "./components/Testimonial";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import testimonialImage1 from "../assests/Testimonial1.jpg";
import testimonialImage2 from "../assests/Testimonial2.jpg";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Carousel
        autoPlay={true}
        interval={2000}
        showIndicators={false}
        infiniteLoop={true}
      >
        <Testimonial
          image={testimonialImage1}
          testimonial="Sami shop in Chiang Mai is a hidden gem! As soon as I walked
                  in, I was impressed by the special items and Samis genuine
                  love for what he does."
        />
        <Testimonial
          image={testimonialImage2}
          testimonial="Sami shop in Chiang Mai is a hidden gem! As soon as I walked
                  in, I was impressed by the special items and Samis genuine
                  love for what he does."
        />
      </Carousel>
      <Footer />
    </>
  );
}
