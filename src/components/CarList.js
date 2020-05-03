import React from "react";
//import car from "./car";
const CarsList = ({ cars }) => {
  if (cars.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no cars matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="carslist">
      <div className="carslist-center">
        {cars.map(item => {
          return <car key={item.id} car={item} />;
        })}
      </div>
    </section>
  );
};

export default CarsList;