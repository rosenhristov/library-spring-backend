import React from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";
import {ExploreTopBooks} from "./layouts/HomePage/components/ExploreTopBooks";
import {Carousel} from "./layouts/HomePage/components/Carousel";

export const App = () => {
  return (
      <div>
        <Navbar/>
        <ExploreTopBooks/>
        <Carousel/>
      </div>
  )
}
