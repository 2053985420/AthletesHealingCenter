import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";

const Background = () => {
  return (
    <Jumbotron fluid id="background" className="bg-light m-0">
      <Container className="">
        <div style={{display:'flex',height:'480px'}}>
            <div className={'col-lg-5'}>
                <img style={{width:'350px',transform:'translate(1px,1px)'}} src={require("../../assets/newImg/图片5.png")}></img>
                <img style={{width:'250px',transform:'translate(220px,-100px)'}} src={require("../../assets/newImg/图片6.png")}></img>
            </div>
            <div className={'col-lg-7'}>
            <h2 className="display-4 pb-5 text-center">Background</h2>
            <p className="lead" style={{ textAlign: 'justify'}}>Hockey is a physical sport that involved intense competition and a high level of stress both on and off the ice. As a result, Hockey players are at risk of developing mental health issues. However, many athletes fear that admitting to mental health problems will be seen as a sign of weakness and may not seek for help. Therefore, this website aims to provide a comprehensive resource and environment for hockey players who are struggling with mental health issues. We offer information and resources on common mental health conditions, advice on seeking help, and resources for finding treatment. Our goal is to create a safe space for Hockey players to discuss mental health and promote a culture of openness and acceptance.</p>        

            </div>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Background;
