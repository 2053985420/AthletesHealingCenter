import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";

const WhyNeeded = React.forwardRef(
    ({}, ref) => {
  return (
    <Jumbotron
        fluid
        id="home"
        style={{minHeight:'calc(100vh - 225px)'}}
      ><Container>
      <h2 ref={ref} className="display-4 pb-3 text-center">Why it’s needed：</h2>
    <p className="lead pb-3" style={{ textAlign: 'justify'}}>
    Hockey is a physical sport that involved intense competition and a high level of stress both on and off the ice. As a result, Hockey players are at risk of developing mental health issues. However, many athletes fear that admitting to mental health problems will be seen as a sign of weakness and may not seek for help. Therefore, this website aims to provide a comprehensive resource and environment for hockey players who are struggling with mental health issues. We offer information and resources on common mental health conditions, advice on seeking help, and resources for finding treatment. Our goal is to create a safe space for Hockey players to discuss mental health and promote a culture of openness and acceptance.
    </p>
    
  </Container></Jumbotron>
  );
});

export default WhyNeeded;
