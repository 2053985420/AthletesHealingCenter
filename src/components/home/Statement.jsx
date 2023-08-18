import React from "react";
import { Jumbotron } from "./migration";

const Statement = () => {
  return (
    <Jumbotron id="aboutme" className="m-0">
      <h2 className="display-4 pb-3 text-center">Mission statement</h2>
      <p className="lead pb-3" style={{ textAlign: 'justify'}}>
        Our mission is for athletes to achieve mental wellness and thrive in their sports by providing compassionate support and resources. Mental health is just as important as physical health, and by accepting their well-being and adjusting their mindset, they can overcome mental health challenges and reach their full potential. We aim to create a culture of openness and acceptance around mental health in sports, trying to motivate athletes to prioritize their mental health and achieve their full potential.
      </p>
    </Jumbotron>
  );
};

export default Statement;
