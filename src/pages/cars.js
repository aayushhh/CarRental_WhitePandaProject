import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import CarsContainer from "../components/CarsContainer";
const cars = () => {
  return (
    <>
      <Hero hero="carsHero">
      <Banner title="Our cars" subtitle ="Cars starting at 500rs">
     
      <Link to="/" className="btn-primary">
            return home
          </Link>
      </Banner>
          
       
      </Hero>
      <CarsContainer/>
    </>
  );
};

export default cars;