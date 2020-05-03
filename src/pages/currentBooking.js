import React, { Component } from "react";
import defaultBcg from "../images/car-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { CarContext } from "../context";
import StyledHero from "../components/StyledHero";
export default class currentBooking extends Component {
        constructor(props) {
            super(props);
            console.log(this.props);
            this.state = {
              slug: this.props.match.params.slug,
              defaultBcg: defaultBcg
            }
        }
          static contextType = CarContext;
        
           componentDidMount() {
             console.log(this.props);
          }
          render() {
              
              <Hero>  
              </Hero>
          const { getCar } = this.context;
            const car = getCar(this.state.slug);
        
            if (!car) {
              return (
                <div className="error">
                  <h3> no such car could be found...</h3>
                  <Link to="/cars" className="btn-primary">
                    back to cars
                  </Link>
                </div>
              );
            }
            const {
              name,
              description,
              capacity,
              size,
              price,
              extras,
              breakfast,
              pets,
              images
            } = car;
            const [main, ...defaultImages] = images;
            console.log(defaultImages);
        
            return (
              <>
                <StyledHero img={images[0] || this.state.defaultBcg}>
                  <Banner title={`${name} car`}>
                    <Link to="/cars" className="btn-primary">
                      back to cars
                    </Link>
                  </Banner>
                </StyledHero>
                <section className="single-car">
                  <div className="single-car-images">
                    {defaultImages.map((item, index) => (
                      <img key={index} src={item} alt={name} />
                    ))}
                  </div>
                  <div className="single-car-info">
                    <article className="desc">
                      <h3>details</h3>
                      <p>{description}</p>
                    </article>
                    <article className="info">
                      <h3>info</h3>
                      <h6>price : ${price}</h6>
                      <h6>size : {size} SQFT</h6>
                      <h6>
                        max capacity :
                        {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                      </h6>
                      <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                      <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
                  </div>
                </section>
                <section className="car-extras">
                  <h6>extras </h6>
                  <ul className="extras">
                    {extras.map((item, index) => (
                      <li key={index}>- {item}</li>
                    ))}
                  </ul>
                  
                </section>
              </>
            );
          }
        }