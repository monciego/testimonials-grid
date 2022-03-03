import React from "react";
import "./App.css";
import Testimonial from "./Testimonial";
import { cardsData } from "./data";

const App = () => {
  return (
    <div className="testimonials">
      {cardsData.map((card) => {
        return <Testimonial key={card.id} {...card} />;
      })}
    </div>
  );
};

export default App;
