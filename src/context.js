import React, { Component } from 'react'
import items from './data'
const CarContext = React.createContext();
//import Client from "./Contentful";
// <CarContext.Provider value={'hello'}

 class CarProvider extends Component {
    state={
        cars:[],
        bookedCars:[],
        bestDeals:[],
        loading:true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        pets: false,
    };
    //getData 
    componentDidMount(){
        let cars =this.formatData(items);
        let bestDeals = cars.filter(car=>car.bestDeals === true);
        let maxPrice = Math.max(...cars.map(item => item.price));
    let maxSize = Math.max(...cars.map(item => item.size));
    
    this.setState({
        cars,bestDeals,bookedCars: cars,loading:false,
        price: maxPrice,
        maxPrice,
        maxSize
    });
    }
    formatData(items){
        let tempItems= items.map(item =>{

            let id =item.sys.id
            let images= item.fields.images.map(image=> image.fields.file.url);
            
            let car={...item.fieds,images,id}
            return car;


        });
        return tempItems
    }
    getCar =(slug) => {
        let tempCars =[...this.cars];
        const car = tempCars.find(room => room.slug===slug)
        return car;
    }
    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log(name, value);
    
        this.setState(
          {
            [name]: value
          },
          this.filterCars
        );
      };

      filtercars = () => {
        let {
          cars,
          type,
          capacity,
          price,
          minSize,
          maxSize,
          breakfast,
          pets
        } = this.state;
    
        let tempCars = [...cars];
        // transform values
        // get capacity
        capacity = parseInt(capacity);
        price = parseInt(price);
        // filter by type
        if (type !== "all") {
          tempCars = tempCars.filter(car => car.type === type);
        }
        // filter by capacity
        if (capacity !== 1) {
          tempCars = tempCars.filter(car => car.capacity >= capacity);
        }
        // filter by price
        tempCars = tempCars.filter(car => car.price <= price);
        //filter by size
        tempCars = tempCars.filter(
          car => car.size >= minSize && car.size <= maxSize
        );
        //filter by breakfast
        if (breakfast) {
          tempCars = tempCars.filter(car => car.breakfast === true);
        }
        //filter by pets
        if (pets) {
          tempCars = tempCars.filter(car => car.pets === true);
        }
        this.setState({
          sortedcars: tempCars
        });
      };
    
    render() {
        return(<CarContext.Provider value={{ ...this.state,getCar:this.getCar,handleChange: this.handleChange }}>
        {this.props.children}
        </CarContext.Provider>
        );
    }
}
const CarConsumer = CarContext.Consumer;


export {CarProvider, CarConsumer, CarContext};

export function withCarConsumer(Component) {
    return function ConsumerWrapper(props) {
      return (
        <CarConsumer>
          {value => <Component {...props} context={value} />}
        </CarConsumer>
      );
    };
  }