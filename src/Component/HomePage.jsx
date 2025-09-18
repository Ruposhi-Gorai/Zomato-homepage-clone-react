import React from "react";
import Header from "./Header"
import Breadcrumbs from "./Breadcrumbs";
import Carousel from './Carousel'
import RestaurantList from "./RestaurantList";
import Accordian from "./Accordian";
import Footer from './Footer'
export default function HomePage() {
  return (
    <>    
        <Header />
        <Breadcrumbs/>
        <Carousel/>
        <RestaurantList/>
        <Accordian/>
        <Footer/>      
    </>
  );
}
