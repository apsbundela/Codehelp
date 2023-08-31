import React, { useState } from "react";
import Testimonials from "./components/Testimonial";
import reviews from './data'
const App = () => {
 return <div>
    <h2>
      Our Testimonials
    </h2>
    <div></div>
    <Testimonials reviews={reviews}></Testimonials>
  </div>;
};

export default App;
