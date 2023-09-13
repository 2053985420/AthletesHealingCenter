import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";

const SignupModel = React.forwardRef(
    ({}, ref) => {
  return (
    <Jumbotron
        fluid
        id="home"
        style={{minHeight:'calc(100vh - 225px)'}}
      >
    <Container>
    <h2 ref={ref} className="display-4 pb-3"
        style={{fontSize:'25px',fontWeight:'700'}}>SIGN UP TODAY:</h2>
        <a className="text-decoration-none" 
        href={'https://docs.google.com/forms/d/e/1FAIpQLSdc2mkZa2oKowfztf63YugqrZ5KQCdEDQvJb8yZw6FKNBPB3A/viewform?usp=sf_link'}>
            https://docs.google.com/forms/d/e/1FAIpQLSdc2mkZa2oKowfztf63YugqrZ5KQCdEDQvJb8yZw6FKNBPB3A/viewform?usp=sf_link
            </a>
            <div><iframe src={'https://docs.google.com/forms/d/e/1FAIpQLSdc2mkZa2oKowfztf63YugqrZ5KQCdEDQvJb8yZw6FKNBPB3A/viewform?usp=sf_link'} title="Preview" width="100%" height="2115px" />
      </div>
    <h2 className="display-4 pb-3"
        style={{fontSize:'25px',fontWeight:'700',marginTop:'30px'}}>SIGN UP FOR OUR WEEKLY ZOOM SESSIONS:</h2>
        <a className="text-decoration-none" 
        href={'https://us04web.zoom.us/j/72109923161?pwd=nazve949BGb3D9PwZFCae2YbeUbqes.1'}>
            https://us04web.zoom.us/j/72109923161?pwd=nazve949BGb3D9PwZFCae2YbeUbqes.1
            </a>
    </Container></Jumbotron>
  );
});

export default SignupModel;
