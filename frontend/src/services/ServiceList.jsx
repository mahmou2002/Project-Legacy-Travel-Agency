import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';




function ServiceList({weather,tours}) {
    var reviews=0, bestTour=""
    if(tours.length){
        
        for(var i=0;i<tours.length;i++){
            if(tours[i].reviews.length>=reviews){reviews=tours[i].reviews.length;bestTour=tours[i].title}
        }
    }
    
    let temp = "19"
    if(weather.main){temp=Math.floor(weather.main.temp)}
    const servicesData = [
        {
            imgUrl: weatherImg,
            title: "Calculate Weather",
            desc: "Temp: "+ temp +"°C ,Ariana"
        },
        {
            imgUrl: guideImg,
            title: "Best Tour Guide",
            desc: "Yassin Bouzgarrou"
        },
        {
            imgUrl: customizationImg,
            title: "Popular Tour",
            desc:  bestTour
        }
    ]
    return (
    <>
        {servicesData.map((item, i) => (
            <Col lg='3' key={i}>
                <ServiceCard item={item} />
                </Col>))}
    </>
    )
}

export default ServiceList
