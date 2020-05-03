import React from "react";
import "./App.css";

import home from "./pages/home";
import cars from "./pages/cars";
import currentBooking from "./pages/currentBooking";
import error from "./pages/error";

import Navbar from "./components/navBar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path='/cars/' component={cars} />
        <Route exact path="/cuurentBookings/:slug" component={currentBooking} />
        <Route  component={error} />
      </Switch>
    </>);
  }

export default App;