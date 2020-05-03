import React, { Component } from 'react'
import Title from '../components/Title'
import {FaHiking,FaShuttleVan,FaClock,FaBeer} from 'react-icons/fa'
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaHiking/>,
                title:"Get your trip ready.",
                info:'We are providing the cars to get you going and hit the rooads like your own!'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Get the pickup.",
                info:'We are providing the cars to get you going and a service for pick up and drop of the cars!'
            },
            {
                icon:<FaClock/>,
                title:"Get on time",
                info:'We are providing the cars with the minimum time and booking is so fast with no paperwork!'
            },
            {
                icon:<FaBeer/>,
                title:"Get your beer.",
                info:'We are providing the cars and an promotional beer on the house to your every booking!'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services'/>
            <div className="services-center">
                {this.state.services.map((item,index) => {
                    return (
                        <article key={index} classsName="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
                    );
                })}
                </div>
            </section>
        )
    }
}
