import React from "react";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";

const SignUp = ()=> {
    const ul = {
        listStyle:'none',
    }
    const li = {
        marginBottom:'10px',
        color:"#2a313e",
        lineHeight:'24px',
        paddingLeft:'25px'
    }
    const liBefore = {
        content: '"',
        backgroundColor: '#212529',
        width: '11px',
        height: 'calc(10px / 1.1111111)',
        clipPath: 'polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%)',
        marginRight: '5px',
        color: '#f3f3f3',
        overflow: 'hidden',
        display: 'inline-block',

    }
  return (
    <Jumbotron fluid className="bg-white m-0" id="signUp">
        <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdc2mkZa2oKowfztf63YugqrZ5KQCdEDQvJb8yZw6FKNBPB3A/viewform?usp=sf_link"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                sign up today
              </a>
            </p>
        <ul className="bullets list" style={ul}>
            <li style={li}><span style={liBefore}></span>Our staff will contact you regarding further instructions and possible zoom sessions</li>
            <li style={li}><span style={liBefore}></span>Reply to the email with the date you are available</li>
            <li style={li}><span style={liBefore}></span>Feel free to contact our staff if you have any questions</li>
        </ul>
    </Jumbotron>
  );
};
export default SignUp;
