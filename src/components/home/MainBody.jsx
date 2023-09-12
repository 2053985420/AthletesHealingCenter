import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";
import backgroundImage from '../../assets/newImg/WayneGretzky.png';

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          {/* <div className="container row">
          <div className="col-9">
          <div className="typist" style={{marginBottom:'20px',fontSize:'1.75rem'}}>
              {message}
            </div>
            <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            Get Started
          </a>
          </div>
          <div className="col-3">
            <img 
            style={{width:'100%',borderRadius:'20px',position:"relative"}} 
            src={require("../../assets/newImg/WayneGretzky.png")}>
            </img>
          </div>
          </div> */}
          <Typist>
            <div className="typist" style={{marginBottom:'20px',fontSize:'1.75rem'}}>
              {message}
            </div>
          </Typist>
          {/* <div className="typist" 
          style={{marginBottom:'20px',fontSize:'1.75rem',
          backgroundImage:`url(${backgroundImage})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover'}}>
              {message}
            </div> */}
            <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            Get Started
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
