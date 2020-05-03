import React, { Component } from 'react'
import {CarContext} from '../context'
import Loading from './Loading'
import Car from './Car'
import Title from './Title'
export default class BestDeals extends Component {
    static contextType = CarContext
    render() {
        
       let {loading, BestDeals: cars} =
       this.context;
       /*cars = cars.maps(car => {
           return <Car key={car.id} car={car}/>
       });*/
      
       return (

            <section classname="featured-cars">
            <Title title="featured-cars" />
            <div className="featured-cars-center">
            {loading?<Loading/> : cars}
         
            </div>
            </section>
            
        
       );  
    }
}
