import React from "react";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Reviews from "../Reviews/Reviews";
import Service from "../Service/Service";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Service />
      <Reviews />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
