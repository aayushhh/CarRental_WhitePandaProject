import React from "react";
import { withCarConsumer } from "../context";
import Loading from "./Loading";
import CarsFilter from "./CarsFiler";
import CarsList from "./CarList";

function CarsContainer({ context }) {
  let { loading, bookedCars, cars } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <CarsFilter cars={cars} />
      <CarsList cars={bookedCars} />
    </>
  );
}

export default (CarsContainer);
