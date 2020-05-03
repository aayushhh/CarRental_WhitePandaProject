import React from 'react'
import {Link} from 'react-router-dom'
import defaultImf from "../images/car-1.jpeg"
import PropTypes from 'process'
import { memo } from "react";
    const Car = memo(({ car }) => {
    const { name,slug,images,price} = car;
    
    return (<article className="car">
    <div className="img-container">
    <img src={images[0] || defaultImf} alt="single car"></img>
    <div className="price-top">
    <h6>{price}</h6>
    <p>per Hr</p>
    </div>
    <Link to={'/cars/${slug}'} className="btn-primary car-link">
    Details</Link>
    <p className="car-info">{name}</p>
    
    </div>
    </article>
    );
         
});
    /*.propTypes={
    car:PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
};*/
export default Car;